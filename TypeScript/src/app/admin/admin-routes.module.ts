import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth/auth.guard';

const adminRoutes: Routes = [
    {
        path: 'admin/home',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
