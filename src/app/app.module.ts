import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ClientDataService} from './client/client-data.service'
import { ClientListHeaderComponent } from './client/client-list-header/client-list-header.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientListItemComponent } from './client/client-list-item/client-list-item.component';
import { ClientListFooterComponent } from './client/client-list-footer/client-list-footer.component';
import { AlertModule } from 'ngx-bootstrap';
import {ApiService} from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    ClientListHeaderComponent,
    ClientListComponent,
    ClientListItemComponent,
    ClientListFooterComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [ClientDataService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
