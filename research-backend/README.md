# Research Portal Python Backend

## Setup

1. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

2. Set your CORE API key (get one from https://core.ac.uk/services/api/):
   ```sh
   export CORE_API_KEY=your_core_api_key
   # On Windows (cmd):
   set CORE_API_KEY=your_core_api_key
   # On Windows (PowerShell):
   $env:CORE_API_KEY="your_core_api_key"
   ```

3. Run the backend:
   ```sh
   python app.py
   ```

## API

- `GET /search?q=your+query&pdfOnly=true|false`
  - Returns JSON with `core` and `arxiv` results.

## Notes
- The backend caches results for 5 minutes to avoid rate limits.
- arXiv results are parsed from XML to JSON.
- You can extend this backend for more features (pagination, download all PDFs, etc). 