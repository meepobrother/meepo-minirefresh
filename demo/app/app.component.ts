import {
  Component, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

let charms: any[] = [{
  title: '标题1',
  image: 'http://p.qpic.cn/qqconadmin/0/225ce8067b434eb9b2bb02f966599a4e/0',
  desc: '简介简介简介简介简介简介',
  color: 'rgb(26, 182, 252)'
}, {
  title: '标题1',
  image: 'http://p.qpic.cn/qqconadmin/0/225ce8067b434eb9b2bb02f966599a4e/0',
  desc: '简介简介简介简介简介简介',
  color: 'rgb(255, 184, 0)'
}, {
  title: '标题1',
  image: 'http://p.qpic.cn/qqconadmin/0/225ce8067b434eb9b2bb02f966599a4e/0',
  desc: '简介简介简介简介简介简介',
  color: 'rgb(255, 100, 100)'
}, {
  title: '标题1',
  image: 'http://p.qpic.cn/qqconadmin/0/225ce8067b434eb9b2bb02f966599a4e/0',
  desc: '简介简介简介简介简介简介',
  color: 'rgb(255, 90, 164)'
}];

let items = [{
  desc: '考上就“偷着乐”的五类专业, 20年后也不会“衰落”!',
  images: [
    {
      src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
      type: 'video'
    }
  ],
  avatar: 'https://q.qlogo.cn/g?b=qq&k=VIE5RHCJLvbeXSZXXndASw&s=100',
  nickname: '杨明明',
  goods: 0,
  discuss: 0,
  look: 0,
  title: '米波网络',
  color: 'red',
  link: ''
}, {
  desc: '考上就“偷着乐”的五类专业, 20年后也不会“衰落”!',
  images: [
    {
      src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
      type: 'image'
    },
    {
      src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
      type: 'image'
    },
    {
      src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
      type: 'image'
    },
  ],
  avatar: 'https://q.qlogo.cn/g?b=qq&k=VIE5RHCJLvbeXSZXXndASw&s=100',
  nickname: '杨明明',
  goods: 0,
  discuss: 0,
  look: 0,
  title: '米波网络',
  color: 'red',
  link: ''
}, {
  desc: '考上就“偷着乐”的五类专业, 20年后也不会“衰落”!',
  images: [
    {
      src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
      type: 'image'
    },
    {
      src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
      type: 'image'
    },
    {
      src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
      type: 'image'
    },
  ],
  avatar: 'https://q.qlogo.cn/g?b=qq&k=VIE5RHCJLvbeXSZXXndASw&s=100',
  nickname: '杨明明',
  goods: 0,
  discuss: 0,
  look: 0,
  title: '米波网络',
  color: 'red',
  link: ''
}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  options: any;
  constructor(
    public cd: ChangeDetectorRef
  ) {
    this.load();
    this.options = {
      container: '#minirefresh'
    }
  }

  items: any[] = [];
  charms: any[] = [];

  up(e: any) {
    let hasMore = false;
    this.items = [...this.items, ...items];
    e.next(hasMore);
    this.cd.markForCheck();
  }

  down(e: any) {
    console.log('down');
    this.items = items;
    this.charms = charms;
    e.next(false);
    this.cd.markForCheck();
  }

  doUp(e: any) {
    setTimeout(() => {
      this.loadMore();
      e.next(false);
    }, 1000);
  }

  load() {
    this.loadMore();
  }

  loadMore() {
    this.items = [...this.items, ...this.items];
    this.cd.markForCheck();
  }
}
