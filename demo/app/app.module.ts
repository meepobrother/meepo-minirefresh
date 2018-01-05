import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MinirefreshModule } from '../../src/app/app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MinirefreshModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

