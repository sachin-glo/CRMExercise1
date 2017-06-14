import { Component , OnInit  } from '@angular/core';
import {Client} from './client/client';
import {ClientDataService} from './client/client-data.service';
import {City} from  './shared/city'
import {Field} from  './shared/field'
import {Contact} from  './shared/contact'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `ClientDataService`
  // and assign it to a property called `clientDataService`
    clients: Client[] = [];
    cities: City[] = [];
    fields: Field[] = [];
    contacts: Contact[] = [];
  constructor(private clientDataService: ClientDataService) {
  }
  // addClient() {
  //   this.clientDataService.addClient(this.newClient);
  //   this.newClient = new Client();
  // }

 public ngOnInit() {
    this.clientDataService
      .getAllClients()
      .subscribe(
        (clients) => {
          this.clients = clients;
        }
      );

      this.clientDataService
      .getAllCities()
      .subscribe(
        (cities) => {
          this.cities = cities;
        }
      );

       this.clientDataService
      .getAllFields()
      .subscribe(
        (fields) => {
          this.fields = fields;
        }
      );


       this.clientDataService
      .getAllContacts()
      .subscribe(
        (contacts) => {
          this.contacts = contacts;
        }
      );
  }
  
onAddClient(client) {
    this.clientDataService.addClient(client)
    .subscribe(
        (newClient) => {
          this.clients = this.clients.concat(newClient);
        }
      );
  }

onRemoveClient(client) {
    this.clientDataService
      .deleteClientById(client.id)
      .subscribe(
        (_) => {
          this.clients = this.clients.filter((t) => t.id !== client.id);
        }
      );
  }

   

  // get clients() {
  //   return this.clientDataService.getAllClients();
  // }
}
