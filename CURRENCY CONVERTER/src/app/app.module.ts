import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { NavbarLogoComponent } from './COMPONENTS/navbar-logo/navbar-logo.component';
import { NavbarTitleComponent } from './COMPONENTS/navbar-title/navbar-title.component';
import { SearchCurrencyComponent } from './COMPONENTS/search-currency/search-currency.component';
import { CurrencyListAndDetailComponent } from './COMPONENTS/currency-list-and-detail/currency-list-and-detail.component';
import { CurrencyListComponent } from './COMPONENTS/currency-list/currency-list.component';
import { SortByCountryPipe } from './SERVICES_AND_PIPES/sort.pipe';
import { CurrencyComponent } from './COMPONENTS/currency/currency.component';
import { FilterPipe } from './SERVICES_AND_PIPES/filter.pipe';
import { CurrencyDetailComponent } from './COMPONENTS/currency-detail/currency-detail.component';
import { DetailComponent } from './COMPONENTS/detail/detail.component';
import { ButtonComponent } from './COMPONENTS/button/button.component';
import { DetailTableComponent } from './COMPONENTS/detail-table/detail-table.component';
import { AveragePipe } from './SERVICES_AND_PIPES/average.pipe';
import { LineChartComponent } from './COMPONENTS/line-chart/line-chart.component';
import { LoaderComponent } from './COMPONENTS/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogoComponent,
    NavbarTitleComponent,
    SearchCurrencyComponent,
    CurrencyListAndDetailComponent,
    CurrencyListComponent,
    SortByCountryPipe,
    CurrencyComponent,
    FilterPipe,
    CurrencyDetailComponent,
    DetailComponent,
    ButtonComponent,
    DetailTableComponent,
    AveragePipe,
    LineChartComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
