## minirefresh for angular

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MinirefreshModule } from 'meepo-minirefresh';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MinirefreshModule
  ]
})
export class AppModule { }
```

```ts
export class AppComponent {
  onLoad(e: any) {
    let hasMore = true;
    // 是否还有更多了
    e.next(hasMore);
  }

  onRefresh(e: any) {
    console.log('refresh');
  }
}
```

```html
<minirefresh-default (onLoad)="onLoad($event)" (onRefresh)="onRefresh($event)">
    <ul style="background: #efefef;">
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
    </ul>
</minirefresh-default>
```