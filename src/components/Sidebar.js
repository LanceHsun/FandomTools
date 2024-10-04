import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ onSectionSelect }) {
  const sections = ['饭桌', '厨具'];

  return (
    <div className="sidebar">
      <h1>饭和饭的一切</h1>
      <nav>
        <ul>
          {sections.map((section, index) => (
            <li key={index} onClick={() => onSectionSelect(section)}>{section}</li>
          ))}
        </ul>
      </nav>
      <div className="bottom-links">
        <a href="https://pome.vip/eatmeat" target="_blank" rel="noopener noreferrer">我有建议！提名新网站</a>
        <a href="#">About</a>
        <a href="#">Settings</a>
        <a href="#">Mailing list</a>
        <a href="#">Discord</a>
        <a href="https://github.com/LanceHsun/FandomTools" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Sidebar;