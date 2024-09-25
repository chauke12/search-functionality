// src/components/Search.js

import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search posts or users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="mt-2 p-2 bg-blue-500 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
