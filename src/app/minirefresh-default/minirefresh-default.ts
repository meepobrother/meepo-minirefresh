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
    ctrl: any;
    constructor(
        public loader: LoaderService,
        public ele: ElementRef
    ) {
        this.load$.subscribe(res => {
            this.ctrl && this.ctrl.endUpLoading(res);
        });
    }

    ngOnInit() {
        this.loader.importLocals([
            './minirefresh.min.js',
            './themes/default/minirefresh.theme.default.min.js'
        ]).subscribe(res => {
            if (res) {
                this.ctrl = new MiniRefresh({
                    container: this._minirefresh.nativeElement,
                    down: {
                        callback: () => {
                            this.onRefresh.emit();
                            setTimeout(() => {
                                this.ctrl.endDownLoading(false);
                            }, 1000);
                        }
                    },
                    up: {
                        callback: () => {
                            this.onLoad.emit(this.load$);
                        },
                        isAuto: true
                    }
                });
            }
        });
    }
}