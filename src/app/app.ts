import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from 'meepo-loader';
import { EmptyModule } from 'meepo-empty';

import { MeepoRefreshComponent } from './meepo-refresh/meepo-refresh';
import { MeepoRefreshDefaultComponent } from './meepo-refresh-default/meepo-refresh-default';


@NgModule({
    imports: [
        CommonModule,
        LoaderModule.forRoot({
            root: './assets/meepo.libs/'
        }),
        EmptyModule
    ],
    exports: [
        MeepoRefreshComponent,
        MeepoRefreshDefaultComponent
    ],
    declarations: [
        MeepoRefreshComponent,
        MeepoRefreshDefaultComponent
    ],
    providers: [
        
    ]
})
export class MinirefreshModule { }
