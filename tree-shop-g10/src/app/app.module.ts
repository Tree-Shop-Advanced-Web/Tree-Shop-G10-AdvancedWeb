import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { OderComponent } from './components/order/order.component';
import { HeaderComponent } from './components/header/header.component';
import { AddminOrderComponent } from './components/addmin-order/addmin-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    OderComponent,
    HeaderComponent,
    AddminOrderComponent,
    SigninComponent,
    SignupComponent,
    AddAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
