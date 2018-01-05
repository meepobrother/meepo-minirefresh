import {
    Component, OnInit,
    ElementRef, ViewEncapsulation,
    HostBinding, ViewChild, Output, EventEmitter, AfterContentInit
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
export class MinirefreshDefaultComponent implements AfterContentInit {
    @ViewChild('minirefresh') _minirefresh: ElementRef;
    @Output() down: EventEmitter<any> = new EventEmitter();
    @Output() up: EventEmitter<any> = new EventEmitter();

    up$: Subject<any> = new Subject();
    down$: Subject<any> = new Subject();
    reset$: Subject<any> = new Subject();

    options: any = {
        container: null,
        down: {
            callback: () => {
                this.down.emit(this.down$);
            },
            isAuto: true
        },
        up: {
            callback: () => {
                this.up.emit(this.up$);
            },
            isAuto: true
        }
    };

    ctrl: any;
    constructor(
        public loader: LoaderService,
        public ele: ElementRef
    ) {
        this.down$.subscribe(res => {
            this.ctrl && this.ctrl.endDownLoading(res);
        });
        this.up$.subscribe(res => {
            this.ctrl && this.ctrl.endUpLoading(res);
        });
        this.reset$.subscribe(res => {
            this.ctrl && this.ctrl.resetUpLoading();
        });
    }

    ngAfterContentInit() {
        this.init();
        console.log('minirefresh inited');
    }

    init() {
        this.loader.importLocals([
            './minirefresh/minirefresh.min.js',
            './minirefresh/themes/default/minirefresh.theme.default.min.js'
        ]).subscribe(res => {
            if (res) {
                if (this.ctrl) {
                    if (this._minirefresh.nativeElement) {
                        this.options.container = this._minirefresh.nativeElement;
                        this.ctrl.refreshOptions(this.options);
                    }
                } else {
                    if (this._minirefresh.nativeElement) {
                        this.options.container = this._minirefresh.nativeElement;
                        this.ctrl = new MiniRefresh(this.options);
                    }
                }
            }
        });
    }
}