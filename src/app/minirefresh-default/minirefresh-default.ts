import {
    Component, OnInit,
    ElementRef, ViewEncapsulation,
    HostBinding, ViewChild, Output, EventEmitter
} from '@angular/core';
import { LoaderService } from 'meepo-loader';
import { Subject } from 'rxjs/Subject';
declare const MiniRefresh: any;

@Component({
    selector: 'minirefresh-default',
    templateUrl: './minirefresh-default.html',
    styleUrls: ['./minirefresh-default.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MinirefreshDefaultComponent implements OnInit {
    @ViewChild('minirefresh') _minirefresh: ElementRef;
    @Output() onRefresh: EventEmitter<any> = new EventEmitter();
    @Output() onLoad: EventEmitter<any> = new EventEmitter();

    load$: Subject<any> = new Subject();
    refresh$: Subject<any> = new Subject();

    ctrl: any;
    constructor(
        public loader: LoaderService,
        public ele: ElementRef
    ) {
        this.load$.subscribe(res => {
            console.log('load', res);
            this.ctrl && this.ctrl.endUpLoading(res);
        });
        this.refresh$.subscribe(res => {
            console.log('refresh', res);
            this.ctrl && this.ctrl.endDownLoading(res);
        });
    }

    ngOnInit() {
        this.loader.importLocals([
            './minirefresh/minirefresh.min.js',
            './minirefresh/themes/default/minirefresh.theme.default.min.js'
        ]).subscribe(res => {
            if (res) {
                this.ctrl = new MiniRefresh({
                    container: this._minirefresh.nativeElement,
                    down: {
                        callback: () => {
                            this.onRefresh.emit(this.refresh$);
                        },
                        isAuto: true
                    },
                    up: {
                        callback: () => {
                            this.onLoad.emit(this.load$);
                        }
                    }
                });
            }
        });
    }
}