import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCardComponent } from './header-card/header-card.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { ShowcaseProjectCardComponent } from './showcase-project-card/showcase-project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCardComponent,
    NavigationButtonsComponent,
    ShowcaseProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
