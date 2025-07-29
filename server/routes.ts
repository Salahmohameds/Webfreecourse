import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const CORE_API_KEY = "2DhIvZkyOpErL9uVicCtqzNXMmn7aPl5";

// Rate limiting for Core API
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 1000; // 1 second between requests

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Research search endpoint using Core API
  app.get("/search", async (req, res) => {
    try {
      const { q: query, pdfOnly, page = "1" } = req.query;
      
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query parameter is required" });
      }

      const limit = 10;
      const offset = (parseInt(page as string) - 1) * limit;

      console.log(`Searching Core API for: "${query}" (page: ${page}, offset: ${offset})`);

      // Rate limiting - ensure minimum time between requests
      const now = Date.now();
      const timeSinceLastRequest = now - lastRequestTime;
      if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
        const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
        console.log(`Rate limiting: waiting ${waitTime}ms before next request`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
      lastRequestTime = Date.now();

      // Call Core API with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const coreResponse = await fetch("https://api.core.ac.uk/v3/search/works", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${CORE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: query,
          limit: limit,
          offset: offset,
          scroll: false,
          fields: ["title", "abstract", "authors", "downloadUrl", "year", "venue", "doi"]
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (coreResponse.status === 429) {
        console.error("Core API rate limit exceeded");
        return res.status(429).json({ 
          error: "Rate limit exceeded",
          details: "Too many requests to Core API. Please wait a moment and try again.",
          retryAfter: 60 // Suggest waiting 60 seconds
        });
      }

      if (!coreResponse.ok) {
        const errorText = await coreResponse.text();
        console.error(`Core API error: ${coreResponse.status} - ${errorText}`);
        throw new Error(`Core API error: ${coreResponse.status} - ${errorText}`);
      }

      const coreData = await coreResponse.json();
      let results = coreData.results || [];

      console.log(`Core API returned ${results.length} results out of ${coreData.totalHits || 0} total`);

      // Filter for PDF only if requested
      if (pdfOnly === "true") {
        const beforeFilter = results.length;
        results = results.filter((paper: any) => paper.downloadUrl);
        console.log(`Filtered from ${beforeFilter} to ${results.length} papers with PDFs`);
      }

      // Transform the results to match the expected format
      const transformedResults = results.map((paper: any) => ({
        id: paper.id,
        title: paper.title,
        abstract: paper.abstract,
        authors: paper.authors?.map((author: any) => ({ name: author.name })) || [],
        downloadUrl: paper.downloadUrl,
        year: paper.year,
        venue: paper.venue,
        doi: paper.doi
      }));

      res.json({
        core: transformedResults,
        arxiv: [], // We're only using Core API as requested
        total: coreData.totalHits || 0,
        hasMore: (offset + limit) < (coreData.totalHits || 0)
      });

    } catch (error) {
      console.error("Search error:", error);
      
      let errorMessage = "Failed to search papers";
      let errorDetails = "Unknown error";
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = "Request timeout";
          errorDetails = "The search request took too long to complete. Please try again.";
        } else if (error.message.includes('Core API error')) {
          errorMessage = "Core API error";
          errorDetails = error.message;
        } else {
          errorDetails = error.message;
        }
      }
      
      res.status(500).json({ 
        error: errorMessage,
        details: errorDetails
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
