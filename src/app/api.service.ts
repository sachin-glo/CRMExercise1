import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';
import {Client} from  './client/client'
import {City} from  './shared/city'
import {Field} from  './shared/field'
import {Contact} from  './shared/contact'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor( private http: Http) {
  }

// API: GET /clients
  public getAllClients() : Observable<Client[]> {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/clients')
    .map(response => {
      const clients = response.json();
      return clients.map((client) => new Client(client));
    })
    .catch(this.handleError);
  }

public getAllCities() : Observable<City[]> {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/cities')
    .map(response => {
      const cities = response.json();
      return cities.map((city) => new City(city));
    })
    .catch(this.handleError);
  }

  public getAllFields() : Observable<Field[]> {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/fields')
    .map(response => {
      const fields = response.json();
      return fields.map((field) => new City(field));
    })
    .catch(this.handleError);
  }


  public getAllContacts() : Observable<Contact[]> {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/contacts')
    .map(response => {
      const contacts = response.json();
      return contacts.map((contact) => new City(contact));
    })
    .catch(this.handleError);
  }
  // API: POST /clients
  public createClient(client: Client) :Observable<Client> {
    // will use this.http.post()

    return this.http
    .post(API_URL + '/clients', client)
    .map(response => {
      return new Client(response.json());
    })
    .catch(this.handleError);
  }

  // API: GET /clients/:id
  public getClientById(clientId: number) : Observable<Client> {
    // will use this.http.get()
     return this.http
    .get(API_URL + '/clients/' + clientId)
    .map(response => {
      return new Client(response.json());
    })
    .catch(this.handleError);
  }

  // API: PUT /clients/:id
  public updateClient(client: Client) :Observable<Client> {
    // will use this.http.put()
    return this.http
    .put(API_URL + '/clients/' + client.id, client)
    .map(response => {
      return new Client(response.json());
    })
    .catch(this.handleError);
  }

  // DELETE /clients/:id
  public deleteClientById(clientId: number) :Observable<null> {
    // will use this.http.delete()
     return this.http
    .delete(API_URL + '/clients/' + clientId)
    .map(response => null)
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
  console.error('ApiService::handleError', error);
  return Observable.throw(error);
}
}