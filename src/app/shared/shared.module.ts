import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {RouterLink} from "@angular/router";
import {ScrollIndicatorComponent} from './components/scroll-indicator/scroll-indicator.component';
import {PhotoContactsComponent} from './components/photo-contacts/photo-contacts.component';
import {FooterComponent} from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ScrollIndicatorComponent,
    PhotoContactsComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    ScrollIndicatorComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ]
})
export class SharedModule {
}
