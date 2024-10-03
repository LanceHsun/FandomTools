import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '../styles/Sidebar.css';
import SearchResults from './SearchResults';

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearchFocus = () => {
    setShowResults(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <div className="sidebar">
      <h1>Husker</h1>
      <div className="search-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        {showResults && <SearchResults searchTerm={searchTerm} />}
      </div>
      <nav>
        <ul>
          <li>Apps</li>
          <li>General</li>
          <li>Courses</li>
          <li>Husky Card</li>
          <li>Financial</li>
          <li>Housing</li>
          <li>Miscellaneous</li>
          <li>Social</li>
          <li>Resources</li>
        </ul>
      </nav>
      <div className="bottom-links">
        <a href="#">Contribute</a>
        <a href="#">About</a>
        <a href="#">Settings</a>
        <a href="#">Mailing list</a>
        <a href="#">Discord</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  );
}

export default Sidebar;