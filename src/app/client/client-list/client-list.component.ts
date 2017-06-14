import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Client} from  '../client'
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent  {


@Input()
  clients: Client[];

  @Output()
  remove: EventEmitter<Client> = new EventEmitter();

  @Output()
  updateClient: EventEmitter<Client> = new EventEmitter();

onUpdateClient(client: Client) {
    this.updateClient.emit(client);
  }

  onRemoveClient(client: Client) {
    this.remove.emit(client);
  }

  removeClient(client: Client) {
    this.remove.emit(client);
  }
  constructor() { }

 

}
