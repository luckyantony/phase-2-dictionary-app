import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultDisplay from './components/ResultDisplay';
import useDictionary from './hooks/UseDictionary';

const App = () => {
  const [searchResult, setSearchResult] = useState('');
  const { data, loading, error } = useDictionary(searchResult);

  const handleSearch = (searchTerm) => {
    setSearchResult(searchTerm);
  };

  return (
    <div className="app-container">
      <h1 className="title">React Dictionary App</h1>
      <SearchBar onSearch={handleSearch} />
      <ResultDisplay 
        data={Array.isArray(data) ? data[0] : null} 
        loading={loading} 
        error={error} 
      />
    </div>
  );
};


export default App;