import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { appRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { HomeModule } from '../pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
