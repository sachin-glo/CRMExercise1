import { Injectable } from '@angular/core';

import {Client} from  './client/client'
import {City} from  './shared/city'
import {Field} from  './shared/field'
import {Contact} from  './shared/contact'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';



@Injectable()
export class ApiMockService {

  constructor( ) {
  }

// API: GET /clients
  public getAllClients() : Observable<Client[]> {
    // will use this.http.get()
    return  Observable.of([new Client({id: 1, name: 'John doe', description: "Sales"})
    ]);
  } 

public getAllCities() : Observable<City[]> {
    // will use this.http.get()
    return  Observable.of([new City({id: 1, city: 'John doe'})
    ]);
  }

  public getAllFields() : Observable<Field[]> {
    // will use this.http.get()
   return  Observable.of([new Field({id: 1, field: 'John doe'})
    ]);
  }


  public getAllContacts() : Observable<Contact[]> {
    // will use this.http.get()
    return  Observable.of([new Contact({id: 1, name: 'John doe'})
    ]);
  }
  // API: POST /clients
  public createClient(client: Client) :Observable<Client> {
    // will use this.http.post()
    return   Observable.of(new Client({id: 1, name: 'John doe', description: "Sales"}));
  }

  // API: GET /clients/:id
  public getClientById(clientId: number) : Observable<Client> {
    // will use this.http.get()
     return   Observable.of(new Client({id: 1, name: 'John doe', description: "Sales"}));
  }

  // API: PUT /clients/:id
  public updateClient(client: Client) :Observable<Client> {
    // will use this.http.put()
    return   Observable.of(new Client({id: 1, name: 'John doe', description: "Sales"}));
  }

  // DELETE /clients/:id
  public deleteClientById(clientId: number) :Observable<null> {
    // will use this.http.delete()
     return null;
  }

  
}