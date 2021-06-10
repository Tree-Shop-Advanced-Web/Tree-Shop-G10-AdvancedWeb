import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddproductComponent}from '../app/components/addproduct/addproduct.component'
import {OderComponent} from '../app/components/order/order.component'
import {AddminOrderComponent} from '../app/components/addmin-order/addmin-order.component'
const routes: Routes = [
  {path:'addproduct',component:AddproductComponent},
  {path:'order',component:OderComponent},
  {path:'addminorder',component:AddminOrderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
