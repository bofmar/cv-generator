import { nanoid } from 'nanoid';

class input {
  constructor(placeHolder, type = 'text', value = '') {
    this.type = type;
    this.placeHolder = placeHolder;
    this.value = value
    this.id = nanoid();
  }
}

const inputs = {
  personal: [
    new input('First Name'),
    new input('Last Name'),
    new input('Title'),
    new input('Address'),
    new input('Phone number'),
    new input('Email', 'email'),
  ]
}


export default inputs;
