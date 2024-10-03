import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [selectedSection, setSelectedSection] = useState('Apps');

  return (
    <div className="App">
      <Sidebar onSectionSelect={setSelectedSection} />
      <MainContent selectedSection={selectedSection} />
    </div>
  );
}

export default App;