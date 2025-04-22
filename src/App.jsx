import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultDisplay from './components/ResultDisplay';
import useDictionary from './hooks/UseDictionary';

const App = () => {
  const [searchResult, setSearchResult] = useState('');

  
  const { data, loading, error } = useDictionary(searchResult);

  const handleSearch = (searchTerm) => {
    setSearchResult(searchTerm);
    console.log('Search Term:', searchTerm);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <SearchBar onSearch={handleSearch} />

      <ResultDisplay data={data?.[0]} loading={loading} error={error} />

      {searchResult && <p>Searching for: {searchResult}</p>}
    </div>
  );
};

export default App;
