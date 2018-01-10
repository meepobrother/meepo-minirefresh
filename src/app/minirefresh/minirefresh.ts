import {
    Component, OnInit, ContentChild,
    TemplateRef, Output, EventEmitter,
    Input, AfterContentInit
} from '@angular/core';
import { LoaderService } from 'meepo-loader';
declare const MiniRefreshTools: any;
@Component({
    selector: 'minirefresh',
    templateUrl: './minirefresh.html',
    styles: [`
    .minirefresh-scroll {
        background: #FFFFFF;
    }
    `]
})
export class MinirefreshComponent implements AfterContentInit {
    @ContentChild('ref') ref: TemplateRef<any>;
    @Input() data: any;
    miniRefresh: any;
    @Output() pullingDown: EventEmitter<any> = new EventEmitter();
    @Output() pullingUp: EventEmitter<any> = new EventEmitter();

    @Input() options: any;
    constructor(
        public loader: LoaderService
    ) { }

    ngAfterContentInit() {
        this.loadSrc();
    }

    loadSrc() {
        if (window['MiniRefresh']) {
            this.initMiniRefresh();
        } else {
            this.loader.importLocals([
                './minirefresh/minirefresh.min.js',
                './minirefresh/themes/default/minirefresh.theme.default.min.js'
            ]).subscribe(res => {
                if (res) {
                    this.initMiniRefresh();
                }
            });
        }
    }

    initMiniRefresh() {
        this.miniRefresh = new MiniRefreshTools.theme.defaults(Object.assign(this.options, {
            down: Object.assign(this.options.down || {}, {
                callback: () => {
                    this.pullingDown.next();
                }
            }),
            up: Object.assign(this.options.up || {}, {
                callback: () => {
                    this.pullingUp.emit()
                }
            })
        }));
    }

    triggerDownLoading(isShowLoading) {
        this.miniRefresh.triggerDownLoading(isShowLoading)
    }

    triggerUpLoading(isShowLoading) {
        this.miniRefresh.triggerUpLoading(isShowLoading)
    }

    endDownLoading(isSuccess, successTips) {
        this.miniRefresh.endDownLoading(isSuccess, successTips)
    }

    endUpLoading(isFinishUp) {
        this.miniRefresh.endUpLoading(isFinishUp)
    }

    resetUpLoading() {
        this.miniRefresh.resetUpLoading()
    }

    scrollTo(y, duration) {
        this.miniRefresh.scrollTo(y, duration)
    }

    refreshOptions(options) {
        this.miniRefresh.refreshOptions(options)
    }
}
