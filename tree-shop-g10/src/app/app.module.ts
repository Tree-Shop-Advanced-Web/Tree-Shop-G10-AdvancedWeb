import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OderhistoryComponent } from './components/oderhistory/oderhistory.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { OderComponent } from './components/oder/oder.component';
import { HeaderComponent } from './components/header/header.component';
import { AddminOrderComponent } from './components/addmin-order/addmin-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OderhistoryComponent,
    AddproductComponent,
    OderComponent,
    HeaderComponent,
    AddminOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
