import { Component, Input  } from '@angular/core';
import {Client} from '../client'

@Component({
  selector: 'app-client-list-footer',
  templateUrl: './client-list-footer.component.html',
  styleUrls: ['./client-list-footer.component.css']
})
export class ClientListFooterComponent  {
  @Input()
  clients: Client[];

  


  constructor() { }
}
