import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './presentation/edit/edit/edit.component';

import { DeleteComponent } from './presentation/delete/delete/delete.component';
import { ListAllComponent } from './presentation/listAll/list-all/list-all.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    
    DeleteComponent,
         ListAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
