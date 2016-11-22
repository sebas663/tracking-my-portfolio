import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioCloseComponent }    from './portfolio-close.component';

const routes: Routes = [
  { path: 'portfolio-close',  component: PortfolioCloseComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioCloseModuleRouting { }