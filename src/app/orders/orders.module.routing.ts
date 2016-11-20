import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent }    from './orders.component';

const ordersRoutes: Routes = [
  { path: 'orders',  component: OrdersComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ordersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersModuleRouting { }