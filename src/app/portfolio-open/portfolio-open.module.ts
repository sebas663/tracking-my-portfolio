import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioOpenComponent }    from './portfolio-open.component';
import { PortfolioOpenModuleRouting } from './portfolio-open.module.routing';

@NgModule({
  imports: [
    CommonModule,
    PortfolioOpenModuleRouting
  ],
  declarations: [
    PortfolioOpenComponent
  ]
})
export class PortfolioOpenModule { }
