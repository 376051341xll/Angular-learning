import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeroFormComponent} from "./heroes/hero-form.component";
import {FormsModule} from "@angular/forms";
import {HeroListComponent} from "./heroes/hero-list.component";
import {Logger} from "./heroes/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
