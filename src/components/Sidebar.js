import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ onSectionSelect }) {
  const sections = ['饭桌', '厨具', '梯子','+'];

  return (
    <div className="sidebar">
      <h1>饭和饭的一切</h1>
      <div className="bookmark-reminder">
        防走丢→点网址右侧⭐加入收藏夹
      </div>
      <nav>
        <ul>
          {sections.map((section, index) => (
            <li key={index} onClick={() => onSectionSelect(section)}>{section}</li>
          ))}
        </ul>
      </nav>
      <div className="bottom-links">
        <a href="https://pome.vip/eatmeat" target="_blank" rel="noopener noreferrer">作者信箱←建议走这里</a>
        <a href="https://github.com/LanceHsun/FandomTools" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Sidebar;