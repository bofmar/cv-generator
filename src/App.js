import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import inputs, { input } from './helpers/inputs';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState(inputs.personal);
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState([inputs.experience]);
  const [education, setEducation] = useState([inputs.education]);
  const [skills, setSkills] = useState([inputs.skills]);

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
      case 'education':
        setEducation(prevEd => prevEd.map(ed => ([[...ed[0]], [...updateField(ed[1], id, value)]])));
        break;
      default:
        setSkills(prevSkill => prevSkill.map(skill => ([[...skill[0]], [...updateField(skill[1], id, value)]])));
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
    } else if (blockName === 'education') {
      const nextEd = createEd();
      setEducation(prevEd => [...prevEd, nextEd]);
    } else {
      const nextSkill = createSkill();
      setSkills(prevSkill => [...prevSkill, nextSkill]);
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

  function createEd() {
    return [
      [{ id: nanoid() }],
      [
        new input('University name', 'education'),
        new input('Degree', 'education'),
        new input('Subject', 'education'),
        new input('From', 'education'),
        new input('Until', 'education')
      ]
    ]
  }

  function createSkill() {
    return [
      [{ id: nanoid() }],
      [
        new input('skill', 'skills')
      ]
    ]
  }

  function deleteBlock(id, blockName, event) {
    event.preventDefault();
    if (blockName === 'experience') {
      setExperience(prevExp => getFilteredList(prevExp, id));
    } else if (blockName === 'education') {
      setEducation(prevEd => getFilteredList(prevEd, id));
    } else {
      setSkills(prevSkill => getFilteredList(prevSkill, id));
    }
  }

  function getFilteredList(list, id) {
    return list.filter(item => item[0][0].id !== id);
  }

  return (
    <div className="App">
      <Header />
      <Form
        personalInfo={personalInfo}
        description={description}
        experience={experience}
        education={education}
        skills={skills}
        handleChange={handleChange}
        addBlock={addBlock}
        deleteBlock={deleteBlock}
      />
    </div>
  );
}

export default App;
