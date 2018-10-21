import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PolishDatePipe } from './pipes/polish-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PolishDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
