import {
    Component, OnInit, HostBinding,
    AfterContentInit, ElementRef, ViewEncapsulation,
    Input, EventEmitter, Output
} from '@angular/core';
declare const MiniRefresh: any;
import { LoaderService } from 'meepo-loader';
@Component({
    selector: 'meepo-refresh',
    templateUrl: './meepo-refresh.html',
    styleUrls: ['./meepo-refresh.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MeepoRefreshComponent implements AfterContentInit {
    @HostBinding('class.minirefresh-wrap') _wrap: boolean = true;
    @HostBinding('attr.id') _id: string = `meepo-refresh-` + new Date().getTime();
    refresh: any;
    @Input() option: any = {};
    @Output() up: EventEmitter<any> = new EventEmitter();
    @Output() down: EventEmitter<any> = new EventEmitter();
    @Input() empty: boolean = true;
    isDownFirst: boolean = true;
    isUpFirst: boolean = true;

    constructor(
        public loader: LoaderService,
        public ele: ElementRef
    ) { }

    ngAfterContentInit() {
        this.option = {
            ...this.option,
            ...{
                down: {
                    callback: () => {
                        if (this.empty) {
                            this.refresh.endDownLoading();
                        }
                        this.down.next(this.refresh.endDownLoading);
                    }
                },
                up: {
                    callback: () => {
                        if (this.empty) {
                            setTimeout(() => {
                                this.refresh.endUpLoading(true);
                            }, 600);
                        }
                        this.up.next(this.refresh.endUpLoading);
                    },
                    isAuto: true
                }
            }
        }
        this.init();
    }

    init() {
        if (window['MiniRefresh']) {
            this.refresh = new MiniRefresh({
                container: '#' + this._id,
                ...this.option
            });
        } else {
            this.loader.importLocals([
                './minirefresh/minirefresh.min.js'
            ]).subscribe(res => {
                if (res) {
                    this.refresh = new MiniRefresh({
                        container: '#' + this._id,
                        ...this.option
                    });
                }
            });
        }
        console.log(this.refresh);
    }
}
