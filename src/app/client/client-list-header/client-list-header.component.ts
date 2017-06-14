import { Component, Output, EventEmitter , Input  } from '@angular/core';
import {Client} from '../client'
import {City} from 'app/shared/city'
import {Field} from 'app/shared/field'
import {Contact} from 'app/shared/contact'
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-client-list-header',
  templateUrl: './client-list-header.component.html',
   
  styleUrls: ['./client-list-header.component.css'],
  
})
export class ClientListHeaderComponent  {


@Input()
  cities: City[];

  @Input()
  fields: Field[];

  @Input()
  contacts: Contact[];
  constructor() {
    
   }

 newClient:Client = new Client();
 @Output()
  add: EventEmitter<Client> = new EventEmitter();
 
 addClient() {
    this.add.emit(this.newClient);
    this.newClient = new Client();
  }
}
