import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as app from './app.component';

@NgModule({
  declarations: [
    app.AppComponent,
    app.ProductImage,
    app.ProductDepartment,
    app.PriceDisplay,
    app.ProductRow,
    app.ProductsList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [app.AppComponent]
})
export class AppModule { }
