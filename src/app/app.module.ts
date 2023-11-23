import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { TemplatesComponent } from './templates/templates.component';

import { ConverterPipe } from './pipes/converter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    ConverterPipe,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
