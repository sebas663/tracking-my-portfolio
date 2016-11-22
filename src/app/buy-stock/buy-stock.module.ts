import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyStockComponent } from './buy-stock.component';
import { BuyStockModuleRouting } from './buy-stock.module.routing';

@NgModule({
  imports: [
    CommonModule,
    BuyStockModuleRouting
  ],
  declarations: [
    BuyStockComponent
  ]
})
export class BuyStockModule { }
