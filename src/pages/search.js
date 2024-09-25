// src/pages/search.js

import { useState } from 'react';
import Search from '../components/Search';

const SearchPage = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const res = await fetch(`/api/search?query=${query}`);
    const data = await res.json();
    setResults(data.results);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Search Page</h1>
      <Search onSearch={handleSearch} />
      <div className="mt-4">
        <h2 className="text-xl">Results:</h2>
        <ul>
          {results.map((result) => (
            <li key={result.id} className="border p-2 mt-2">
              {result.title || result.name} ({result.type})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
