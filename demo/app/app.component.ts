import {
  Component, ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
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
