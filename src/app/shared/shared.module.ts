import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {RouterLink} from "@angular/router";
import {ScrollIndicatorComponent} from './components/scroll-indicator/scroll-indicator.component';
import { PhotoContactsComponent } from './components/photo-contacts/photo-contacts.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ScrollIndicatorComponent,
    PhotoContactsComponent
  ],
  exports: [
    HeaderComponent,
    ScrollIndicatorComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ]
})
export class SharedModule {
}
