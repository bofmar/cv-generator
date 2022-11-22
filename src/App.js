import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import inputs from './helpers/inputs';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState(inputs.personal);

  return (
    <div className="App">
      <Header />
      <Form personalInfo={personalInfo} />
    </div>
  );
}

export default App;
