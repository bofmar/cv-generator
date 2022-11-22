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
    new input('Email', 'email', 'personal'),
  ],
  experience: [
    [{ id: nanoid() }],
    [
      new input('Position', 'experience'),
      new input('Company', 'experience'),
      new input('From', 'experience'),
      new input('Until', 'experience')
    ],
  ],
}


export default inputs;
