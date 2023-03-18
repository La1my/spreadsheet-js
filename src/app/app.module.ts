import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemCardModule } from '@library/components';
import { HeaderModule } from './components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Lib

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    ItemCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
