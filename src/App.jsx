import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchResult(searchTerm);
    console.log('Search Term:', searchTerm); // For now, log it to the console
  };

  return (
    <div>
      <h1>Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {searchResult && <p>Searching for: {searchResult}</p>}
      </div>
      </div>
  );
};

export default App;