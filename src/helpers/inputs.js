import { nanoid } from 'nanoid';

class input {
  constructor(placeHolder, section, type = 'text', value = '') {
    this.type = type;
    this.placeHolder = placeHolder;
    this.value = value
    this.id = nanoid();
    this.section = section;
  }
}

const inputs = {
  personal: [
    new input('First Name', 'personal'),
    new input('Last Name', 'personal'),
    new input('Title', 'personal'),
    new input('Address', 'personal'),
    new input('Phone number', 'personal'),
    new input('Email', 'personal', 'email'),
  ],
  experience: [
    [{ id: nanoid() }],
    [
      new input('Position', 'experience'),
      new input('Company', 'experience'),
      new input('From', 'experience'),
      new input('Until', 'experience'),
    ],
  ],
  education: [
    [{ id: nanoid() }],
    [
      new input('University name', 'education'),
      new input('Subject', 'education'),
      new input('From', 'education'),
      new input('Until', 'education')
    ]
  ],
  skills: [
    [{ id: nanoid() }],
    [
      new input('Skill', 'skills')
    ]
  ]
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


export default inputs;
export { input, createExp, createEd, createSkill };
