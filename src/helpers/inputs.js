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
  ]
}


export default inputs;
