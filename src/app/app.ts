import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from 'meepo-loader';
import { MinirefreshDefaultComponent } from './minirefresh-default/minirefresh-default';
@NgModule({
    imports: [
        CommonModule,
        LoaderModule.forRoot({
            root: './assets/meepo.libs/minirefresh/'
        })
    ],
    exports: [
        MinirefreshDefaultComponent
    ],
    declarations: [
        MinirefreshDefaultComponent
    ],
    providers: [
    ],
})
export class MinirefreshModule { }
