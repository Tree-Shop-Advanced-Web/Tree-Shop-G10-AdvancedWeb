import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddproductComponent}from '../app/components/addproduct/addproduct.component'
import {OderComponent} from '../app/components/order/order.component'
import {AddminOrderComponent} from '../app/components/addmin-order/addmin-order.component'
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'addproduct',component:AddproductComponent},
  {path:'order',component:OderComponent},
  {path:'addminorder',component:AddminOrderComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-address',component:AddAddressComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
