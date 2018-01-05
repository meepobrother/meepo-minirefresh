import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MinirefreshModule } from 'meepo-minirefresh';
import { ArticleModule } from 'meepo-article';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MinirefreshModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

