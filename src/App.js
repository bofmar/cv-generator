import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import inputs from './helpers/inputs';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState(inputs.personal);

  function handleChange(event, id, section) {
    switch (section) {
      case 'personal':
        setPersonalInfo(prevInfo => prevInfo.map(info => info.id === id ? ({ ...info, value: event.target.value }) : info));
    }
  }

  return (
    <div className="App">
      <Header />
      <Form personalInfo={personalInfo} handleChange={handleChange} />
    </div>
  );
}

export default App;
