import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BuyStockModule,
    SellStockModule,
    PortfolioOpenModule,
    PortfolioCloseModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
