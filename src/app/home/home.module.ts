import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home-routing.module';

@NgModule({
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        ...routedComponents,

    ],
    providers: [],
})
export class HomeModule { }
