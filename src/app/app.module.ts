import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AddComponent } from './compenents/add/add.component';
import { ListComponent } from './compenents/list/list.component';
import { SearcComponent } from './compenents/searc/searc.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    SearcComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
