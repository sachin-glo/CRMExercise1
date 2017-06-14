import {Client} from './client';
import { FormsModule } from '@angular/forms';
describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let clientObj = new Client({
      id: 1,
      name: 'david',
      description:'hello',
      email:'sachin@gmail.com',
      pincode:'23232',
      city:'delhi',
      field:'sales'
    });
    expect(clientObj.name).toEqual('david');
    expect(clientObj.description).toEqual('hello');
    expect(clientObj.email).toEqual('sachin@gmail.com');
    expect(clientObj.pincode).toEqual('23232');
    expect(clientObj.city).toEqual('delhi');
  });
});
