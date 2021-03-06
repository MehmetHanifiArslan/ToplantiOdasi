import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateToplantiodasiComponent } from './create-toplantiodasi/create-toplantiodasi.component';
import { ToplantiodasiListComponent } from './toplantiodasi-list/toplantiodasi-list.component';
import { ToplantiodasiUpdateComponent } from './toplantiodasi-update/toplantiodasi-update.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateToplantiodasiComponent,
    ToplantiodasiListComponent,
    ToplantiodasiUpdateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
