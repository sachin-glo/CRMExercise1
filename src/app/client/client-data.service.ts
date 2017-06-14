import { Injectable } from '@angular/core';
import {Client} from './client';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import {City} from  '../shared/city'
import {Field} from  '../shared/field'
import {Contact} from  '../shared/contact'
@Injectable()
export class ClientDataService {
  
  constructor(
    private api: ApiService
  ) {
  }

addClient(client: Client): Observable<Client> {
    return this.api.createClient(client);
  }

 // Simulate DELETE /clients/:id
  deleteClientById(id: number): Observable<Client> {
    return this.api.deleteClientById(id);
  }
// Simulate PUT /clients/:id
  updateClient(client: Client): Observable<Client> {
     return this.api.updateClient(client);
  }


// Simulate GET /clients
  getAllClients(): Observable<Client[]> {
    return this.api.getAllClients();
  }

 getAllCities(): Observable<City[]> {
    return this.api.getAllCities();
  }
   getAllFields(): Observable<[Field]> {
    return this.api.getAllFields();
  }
   getAllContacts(): Observable<Contact[]> {
    return this.api.getAllContacts();
  }
  // Simulate GET /clients/:id
  getClientById(id: number): Observable< Client> {
    return this.api.getClientById(id);
  }

}
