import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/framework', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'home', loadChildren: './home/home.module#HomeModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
];