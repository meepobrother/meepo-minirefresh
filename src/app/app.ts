import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from 'meepo-loader';
import { HeaderModule } from 'meepo-header';
import { EmptyModule } from 'meepo-empty';

import { MinirefreshDefaultComponent } from './minirefresh-default/minirefresh-default';
import { MinirefreshHeaderComponent } from './minirefresh-header/minirefresh-header';

@NgModule({
    imports: [
        CommonModule,
        LoaderModule.forRoot({
            root: './assets/meepo.libs/'
        }),
        HeaderModule,
        EmptyModule
    ],
    exports: [
        MinirefreshDefaultComponent,
        MinirefreshHeaderComponent
    ],
    declarations: [
        MinirefreshDefaultComponent,
        MinirefreshHeaderComponent
    ],
    providers: [
    ],
})
export class MinirefreshModule { }
