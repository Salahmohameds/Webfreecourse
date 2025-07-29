import requests
from urllib.request import urlopen
from flask import Flask, jsonify, request
from flask_caching import Cache
import xml.etree.ElementTree as ET
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

CORE_API_KEY = os.environ.get('CORE_API_KEY', 'YOUR_CORE_KEY')

@cache.memoize(timeout=300)
def fetch_core_papers(query):
    url = f"https://api.core.ac.uk/v3/search/works?q={query}&limit=10"
    headers = {"Authorization": f"Bearer {CORE_API_KEY}"}
    resp = requests.get(url, headers=headers)
    if resp.status_code == 200:
        return resp.json().get('results', [])
    return []

@cache.memoize(timeout=300)
def fetch_arxiv_papers(query):
    url = f"http://export.arxiv.org/api/query?search_query=all:{query}&start=0&max_results=10"
    with urlopen(url) as response:
        return response.read().decode('utf-8')

def parse_arxiv_xml(xml_data):
    root = ET.fromstring(xml_data)
    ns = {'atom': 'http://www.w3.org/2005/Atom'}
    papers = []
    for entry in root.findall('atom:entry', ns):
        title = entry.find('atom:title', ns).text
        authors = [a.find('atom:name', ns).text for a in entry.findall('atom:author', ns)]
        pdf_link = None
        for link in entry.findall('atom:link', ns):
            if link.attrib.get('type') == 'application/pdf':
                pdf_link = link.attrib.get('href')
        summary = entry.find('atom:summary', ns).text
        papers.append({
            'title': title,
            'authors': authors,
            'summary': summary,
            'pdf_link': pdf_link
        })
    return papers

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q', '')
    pdf_only = request.args.get('pdfOnly', 'false').lower() == 'true'
    page = int(request.args.get('page', '1'))
    limit = 10
    offset = (page - 1) * limit
    
    core_results = fetch_core_papers(query)
    arxiv_xml = fetch_arxiv_papers(query)
    arxiv_results = parse_arxiv_xml(arxiv_xml)
    
    if pdf_only:
        core_results = [p for p in core_results if p.get('downloadUrl')]
        arxiv_results = [p for p in arxiv_results if p.get('pdf_link')]
    
    # Simple pagination - in a real app you'd implement proper pagination
    core_results = core_results[offset:offset + limit]
    arxiv_results = arxiv_results[offset:offset + limit]
    
    return jsonify({
        'core': core_results,
        'arxiv': arxiv_results
    })

if __name__ == '__main__':
    app.run(debug=True) 