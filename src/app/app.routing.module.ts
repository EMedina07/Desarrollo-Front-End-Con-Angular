import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const roots : Routes = [
    { path: 'home', component: HomeComent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'owner', loadChildren: () => import('./feature/owner/owner.mule').then(m => m.OwnerModule) },
    { path: 'account', loadChildren: () => import('./feature/account/account.module').then(m => m.AccountModule) },
    { path: '404', component: ErrorPageComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full'}
]

@NgModule({
    declarations:[

    ],
    imports:[
        CommonModule,
        RouterModule.forRoot(roots)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }