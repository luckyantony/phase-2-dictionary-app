import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
  <form onSubmit={handleSubmit} className="search-form">
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Enter a word..."
      className="search-input"
    />
    <button type="submit" className="search-button">Search</button>
  </form>

  );
};

export default SearchBar;

