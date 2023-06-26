import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {HeroComponent} from './components/hero/hero.component';
import {SummaryComponent} from './components/summary/summary.component';
import {SharedModule} from "../shared/shared.module";
import { SkillCardsComponent } from './components/skill-cards/skill-cards.component';
import { CommitSnakeComponent } from './components/commit-snake/commit-snake.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SummaryComponent,
    SkillCardsComponent,
    CommitSnakeComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule {
}
