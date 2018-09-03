import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';
import { NgModuleComponent } from './ng-module/ng-module.component';
const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'framework', component: FrameworkComponent },
            { path: 'ng-module', component: NgModuleComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }

export const routedComponents = [
    HomeComponent,
    FrameworkComponent,
    NgModuleComponent
];