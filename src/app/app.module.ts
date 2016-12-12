import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { MenubarModule } from 'primeng/primeng';
import { BuyStockModule } from './buy-stock/buy-stock.module';
import { SellStockModule } from './sell-stock/sell-stock.module';
import { PortfolioOpenModule } from './portfolio-open/portfolio-open.module';
import { PortfolioCloseModule } from './portfolio-close/portfolio-close.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BuyStockModule,
    SellStockModule,
    PortfolioOpenModule,
    PortfolioCloseModule,
    MenubarModule
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
