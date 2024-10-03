import React, { useEffect, useRef } from 'react';
import '../styles/MainContent.css';

function MainContent({ selectedSection }) {
  const sectionRefs = useRef({});

  const sections = [
    {
      title: 'Apps',
      items: ['Canvas', 'Office 365', 'Piazza', 'Navigate', 'NUWorks', 'Workday']
    },
    {
      title: 'General',
      items: ['PaperCut Printing', 'Trace', 'Registrar', 'Navigate', 'NUWorks', 'My Workday', 'NUSHP']
    },
    {
      title: 'Courses',
      items: ['Banner', 'Time Ticketing', 'Schedule', 'Grades', 'Transcript', 'Degree Audit', 'Graduate Degree Audit', 'Calendars', 'NUpath Dashboard', 'Registrar Forms', 'Textbook Exchange', 'RateMyProfessors']
    },
    {
      title: 'Husky Card',
      items: ['Balance', 'Preferences', 'Meal Plan', 'Dining Hours', 'Husky Gym', 'Event Tickets']
    }
  ];

  useEffect(() => {
    if (sectionRefs.current[selectedSection]) {
      sectionRefs.current[selectedSection].scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedSection]);

  const handleItemClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="main-content">
      {sections.map((section, index) => (
        <div key={index} className="section" ref={el => sectionRefs.current[section.title] = el}>
          <h2>{section.title}</h2>
          <div className="items-grid">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="item" onClick={() => handleItemClick(`https://example.com/${item.toLowerCase().replace(/\s+/g, '-')}`)}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainContent;