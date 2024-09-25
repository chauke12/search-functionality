// src/api/search.js

export default function handler(req, res) {
    const { query } = req.query;
  
    // Mock data - you can replace this with a real database query
    const posts = [
      { id: 1, title: 'NextJS Search Functionality', type: 'post' },
      { id: 2, title: 'Building APIs in NextJS', type: 'post' },
    ];
  
    const users = [
      { id: 1, name: 'John Doe', type: 'user' },
      { id: 2, name: 'Jane Smith', type: 'user' },
    ];
  
    // Filter based on search query
    const results = [...posts, ...users].filter((item) =>
      item.title?.toLowerCase().includes(query.toLowerCase()) ||
      item.name?.toLowerCase().includes(query.toLowerCase())
    );
  
    res.status(200).json({ results });
  }
  