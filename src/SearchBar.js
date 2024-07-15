// src/components/SearchBar.js
import React from "react";

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
