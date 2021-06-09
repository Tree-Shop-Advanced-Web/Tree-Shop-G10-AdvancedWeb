import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddproductComponent}from '../app/components/addproduct/addproduct.component'
const routes: Routes = [
  {path:'addproduct',component:AddproductComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
