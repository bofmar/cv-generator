import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import inputs from './helpers/inputs';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState(inputs.personal);

  function handlePersonalInfoChange(event, id) {
    setPersonalInfo(prevInfo => prevInfo.map(info => info.id === id ? ({ ...info, value: event.target.value }) : info));
  }

  return (
    <div className="App">
      <Header />
      <Form personalInfo={personalInfo} handlePersonalInfoChange={handlePersonalInfoChange} />
    </div>
  );
}

export default App;
