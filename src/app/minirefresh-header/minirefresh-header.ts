import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'minirefresh-header',
    templateUrl: './minirefresh-header.html',
    styleUrls: ['./minirefresh-header.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MinirefreshHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    up(e: any) {
        e.next();
    }
}