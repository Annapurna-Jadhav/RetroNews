import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(search);
    }
  };

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Stay connected here...."
        className="px-4 py-2 border border-slate-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-retroBlue"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-retroBlue text-white rounded-r-md hover:bg-retroGreen transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;