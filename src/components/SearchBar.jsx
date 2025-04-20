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
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};
