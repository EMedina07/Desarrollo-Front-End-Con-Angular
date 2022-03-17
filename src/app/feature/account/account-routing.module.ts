import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRegisterComponent } from './../account/pages/account-register/account-register.component';

const roots: Routes = [
    { path: 'register', component: AccountRegisterComponent }
]

@NgModule({
    declarations:[
        AccountRegisterComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(roots)
    ],
    exports: [
        RouterModule,
        AccountRegisterComponent
    ]
})
export class AccountRoutingModule { }