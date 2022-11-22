import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import inputs from './helpers/inputs';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState(inputs.personal);
  const [description, setDescription] = useState('');

  function handleChange(event, id, section) {
    switch (section) {
      case 'personal':
        setPersonalInfo(prevInfo => prevInfo.map(info => info.id === id ? ({ ...info, value: event.target.value }) : info));
        break;
      case 'description':
        setDescription(event.target.value);
        break;
    }
  }

  return (
    <div className="App">
      <Header />
      <Form
        personalInfo={personalInfo}
        description={description}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
