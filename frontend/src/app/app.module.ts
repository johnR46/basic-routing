import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ShowResearchComponent } from './show-research/show-research.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { RoutingMainModule } from "./routing-main/routing-main.module";

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ShowResearchComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RoutingMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
