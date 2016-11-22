import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellStockComponent }    from './sell-stock.component';
import { SellStockModuleRouting } from './sell-stock.module.routing';

@NgModule({
  imports: [
    CommonModule,
    SellStockModuleRouting
  ],
  declarations: [
    SellStockComponent
  ]
})
export class SellStockModule { }
