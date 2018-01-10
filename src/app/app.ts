import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from 'meepo-loader';
import { HeaderModule } from 'meepo-header';
import { EmptyModule } from 'meepo-empty';
import { HammerModule } from 'meepo-hammer';

import { MinirefreshDefaultComponent } from './minirefresh-default/minirefresh-default';
import { MinirefreshComponent } from './minirefresh/minirefresh';


@NgModule({
    imports: [
        CommonModule,
        LoaderModule.forRoot({
            root: './assets/meepo.libs/'
        })
    ],
    exports: [
        MinirefreshDefaultComponent,
        MinirefreshComponent
    ],
    declarations: [
        MinirefreshDefaultComponent,
        MinirefreshComponent
    ],
    providers: [
    ],
})
export class MinirefreshModule { }
