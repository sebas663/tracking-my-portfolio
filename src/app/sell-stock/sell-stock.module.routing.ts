import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellStockComponent }    from './sell-stock.component';

const routes: Routes = [
  { path: 'sellStock',  component: SellStockComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SellStockModuleRouting { }