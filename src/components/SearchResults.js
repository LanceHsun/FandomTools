import React from 'react';
import '../styles/SearchResults.css';

const allItems = [
  'Housing Online', 'E-Bill', 'Balance', 'Canvas', 'Banner', 'Work Request'
  // Add all other items here
];

function SearchResults({ searchTerm }) {
  const filteredItems = allItems.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-results">
      {filteredItems.map((item, index) => (
        <div key={index} className="search-result-item">{item}</div>
      ))}
    </div>
  );
}

export default SearchResults;