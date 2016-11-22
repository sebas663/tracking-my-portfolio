import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyStockComponent }    from './buy-stock.component';

const routes: Routes = [
  { path: 'buyStock',  component: BuyStockComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BuyStockModuleRouting { }