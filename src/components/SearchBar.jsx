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
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        
      />
      <button type="submit" >Submit</button>
    </form>
  );
};

export default SearchBar;

