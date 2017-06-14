import {Contact} from '../shared/contact'

export class Client {
    id: number;
  name: string = '';
  description: string = '';
  email:string='';
  pincode:string='';
  city:string='';
  field:string='';
  contact:Contact[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
