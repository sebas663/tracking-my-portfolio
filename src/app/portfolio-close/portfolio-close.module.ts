import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCloseComponent }    from './portfolio-close.component';
import { PortfolioCloseModuleRouting } from './portfolio-close.module.routing';

@NgModule({
  imports: [
    CommonModule,
    PortfolioCloseModuleRouting
  ],
  declarations: [
    PortfolioCloseComponent
  ]
})
export class PortfolioCloseModule { }
