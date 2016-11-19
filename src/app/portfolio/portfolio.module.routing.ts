import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioComponent }    from './portfolio.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'portfolio',  component: PortfolioComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioModuleRouting { }