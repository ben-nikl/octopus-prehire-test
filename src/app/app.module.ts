import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {
  ButtonComponent, CurrencyComponent,
  CurrencyDetailComponent, CurrencyListAndDetailComponent,
  CurrencyListComponent,
  DetailComponent, DetailNotFoundComponent,
  DetailTableComponent, DropDownSearchCurrencyComponent,
  LineChartComponent, LoaderComponent,
  NavbarComponent, NavbarLogoComponent,
  NavbarTitleComponent, SearchCurrencyComponent
} from "./COMPONENTS";


import { AveragePipe } from './SERVICES_AND_PIPES/average.pipe';
import { FilterPipe } from './SERVICES_AND_PIPES/filter.pipe';
import { SortByCountryPipe } from './SERVICES_AND_PIPES/sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogoComponent,
    NavbarTitleComponent,
    SearchCurrencyComponent,
    DropDownSearchCurrencyComponent,
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
    LoaderComponent,
    DetailNotFoundComponent,
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
