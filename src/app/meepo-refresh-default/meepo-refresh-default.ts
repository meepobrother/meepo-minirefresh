import {
    Component, OnInit, ViewEncapsulation,
    ElementRef, HostBinding
} from '@angular/core';
import { MeepoRefreshComponent } from '../meepo-refresh/meepo-refresh';
declare const MiniRefresh: any;
import { LoaderService } from 'meepo-loader';
@Component({
    selector: 'meepo-refresh-default',
    templateUrl: './meepo-refresh-default.html',
    styleUrls: ['./meepo-refresh-default.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MeepoRefreshDefaultComponent extends MeepoRefreshComponent {
    @HostBinding('class.minirefresh-theme-default') _default: boolean = true;
    constructor(
        loader: LoaderService,
        public ele: ElementRef
    ) {
        super(loader, ele);
    }
    init() {
        if (window['MiniRefresh']) {
            super.init();
        } else {
            this.loader.importLocals([
                './minirefresh/minirefresh.min.js'
            ]).subscribe(res => {
                if (res) {
                    super.init();
                }
            });
        }
    }
}