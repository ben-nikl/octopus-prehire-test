import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { NavbarLogoComponent } from './COMPONENTS/navbar-logo/navbar-logo.component';
import { NavbarTitleComponent } from './COMPONENTS/navbar-title/navbar-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogoComponent,
    NavbarTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
