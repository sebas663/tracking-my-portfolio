import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuyStockComponent } from './buy-stock.component';
import { BuyStockModuleRouting } from './buy-stock.module.routing';
import {AutoCompleteModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BuyStockModuleRouting,
    AutoCompleteModule
  ],
  declarations: [
    BuyStockComponent
  ]
})
export class BuyStockModule { }
