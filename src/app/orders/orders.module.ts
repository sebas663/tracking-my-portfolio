import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersModuleRouting } from './orders.module.routing';

@NgModule({
  imports: [
    CommonModule,
    OrdersModuleRouting
  ],
  declarations: [
    OrdersComponent
  ]
})
export class OrdersModule { }
