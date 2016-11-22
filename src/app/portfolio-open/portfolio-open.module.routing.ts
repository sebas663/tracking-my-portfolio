import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioOpenComponent }    from './portfolio-open.component';

const routes: Routes = [
  { path: 'portfolio-open',  component: PortfolioOpenComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioOpenModuleRouting { }