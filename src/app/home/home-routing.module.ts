import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'framework', component: FrameworkComponent }
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
    FrameworkComponent
];