import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import inputs, { input } from './helpers/inputs';
import { nanoid } from 'nanoid';
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
        setExperience(prevExp => prevExp.map(exp => ([[...exp[0]], [...updateField(exp[1], id, value)]])));
        break;
    }
  }

  function updateField(prevState, id, value) {
    return prevState.map(prev => prev.id === id ? ({ ...prev, value: value }) : prev);
  }

  function addBlock(blockName, event) {
    event.preventDefault();
    if (blockName === 'experience') {
      const nextExp = createExp();
      setExperience(prevExp => [...prevExp, nextExp]);
    }
  }

  function createExp() {
    return [
      [{ id: nanoid() }],
      [
        new input('Position', 'experience'),
        new input('Company', 'experience'),
        new input('From', 'experience'),
        new input('Until', 'experience')
      ],
    ]
  }

  function deleteBlock(id, blockName, event) {
    event.preventDefault();
    if (blockName === 'experience') {
      setExperience(prevExp => prevExp.filter(exp => exp[0][0].id !== id));
    }

  }

  return (
    <div className="App">
      <Header />
      <Form
        personalInfo={personalInfo}
        description={description}
        experience={experience}
        handleChange={handleChange}
        addBlock={addBlock}
        deleteBlock={deleteBlock}
      />
    </div>
  );
}

export default App;
