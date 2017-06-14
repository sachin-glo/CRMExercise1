import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Client} from '../client'
@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.css']
})
export class ClientListItemComponent  {

@Input() client: Client;

  @Output()
  remove: EventEmitter<Client> = new EventEmitter();


  constructor() { }

  
removeClient(client: Client) {
    this.remove.emit(client);
  }
 

}
