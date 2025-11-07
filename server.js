// server.js
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // You'll need to install this

const app = express();
const PORT = process.env.PORT || 3001; // Use 3001 for local dev

// 1. Use CORS middleware
// This allows your React app (running on a different port) to call this server
app.use(cors());

// 2. Define the proxy route
app.get('/api/search-suggestions', async (req, res) => {
  // Get the search query from the request
  const searchQuery = req.query.q;

  if (!searchQuery) {
    return res.status(400).json({ error: 'Search query "q" is required' });
  }

  // IMPORTANT: Replace this with the actual autocomplete API you are trying to use
  // This is a common one for Google/YouTube, but yours might be different.
  const API_URL = `https://suggestqueries.google.com/complete/search?client=firefox&q=${searchQuery}`;

  try {
    // 3. Fetch data from the *actual* API
    const response = await fetch(API_URL, {
      // Some APIs require specific headers, add them here if needed
      // headers: {
      //   'User-Agent': 'your-app-name'
      // }
    });

    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    const data = await response.json();

    // 4. Send the data back to your React app
    res.json(data);

  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
});

// 5. Start the server
app.listen(PORT, () => {
  console.log(`✅ Proxy server listening on http://localhost:${PORT}`);
});