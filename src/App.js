import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import inputs from './helpers/inputs';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState(inputs.personal);
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState([inputs.experience]);

  function handleChange(event, id, section) {
    const value = event.target.value;
    switch (section) {
      case 'personal':
        setPersonalInfo(prevInfo => updateField(prevInfo, id, value))
        break;
      case 'description':
        setDescription(event.target.value);
        break;
      case 'experience':
        setExperience(prevExp => updateField(prevExp, id, value));
    }
  }

  function updateField(prevState, id, value) {
    return prevState.map(prev => prev.id === id ? ({ ...prev, value: value }) : prev);
  }

  return (
    <div className="App">
      <Header />
      <Form
        personalInfo={personalInfo}
        description={description}
        experience={experience}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
