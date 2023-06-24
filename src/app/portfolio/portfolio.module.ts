import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {HeroComponent} from './components/hero/hero.component';
import {SummaryComponent} from './components/summary/summary.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule {
}
