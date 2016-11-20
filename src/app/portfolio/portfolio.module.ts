import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent }    from './portfolio.component';
import { PortfolioModuleRouting } from './portfolio.module.routing';

@NgModule({
  imports: [
    CommonModule,
    PortfolioModuleRouting
  ],
  declarations: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
