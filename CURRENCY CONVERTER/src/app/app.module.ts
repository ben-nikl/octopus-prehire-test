import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { NavbarLogoComponent } from './COMPONENTS/navbar-logo/navbar-logo.component';
import { NavbarTitleComponent } from './COMPONENTS/navbar-title/navbar-title.component';
import { SearchCurrencyComponent } from './COMPONENTS/search-currency/search-currency.component';
import { CurrencyListAndDetailComponent } from './COMPONENTS/currency-list-and-detail/currency-list-and-detail.component';
import { CurrencyListComponent } from './COMPONENTS/currency-list/currency-list.component';
import { SortByCountryPipe } from './SERVICES/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogoComponent,
    NavbarTitleComponent,
    SearchCurrencyComponent,
    CurrencyListAndDetailComponent,
    CurrencyListComponent,
    SortByCountryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
