import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { OwnerListComponent } from './pages/owner-list/owner-list.component';
import { OwnerCreateComponent } from './pages/owner-create/owner-create.component';
import { OwnerUpdateComponent } from './pages/owner-update/owner-update.componet';
import { OwnerDeleteComponet } from './pages/owner-delete/owner-delete.component';
import { OwnerDetailComponent } from './pages/owner-detail/owner-detail.component';

const roots : Routes = [
    { path: 'list', component: OwnerListComponent },
    { path: 'create', component: OwnerCreateComponent },
    { path: 'update/:id', component: OwnerUpdateComponent },
    { path: 'delete/:id', component: OwnerDeleteComponet },
    { path: 'detail/:id', component: OwnerDetailComponent }
]

@NgModule({
    declarations:[
        OwnerListComponent,
        OwnerCreateComponent,
        OwnerUpdateComponent,
        OwnerDeleteComponet,
        OwnerDetailComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(roots)
    ],
    exports:[
        RouterModule,
        OwnerListComponent,
        OwnerCreateComponent,
        OwnerUpdateComponent,
        OwnerDeleteComponet,
        OwnerDetailComponent
    ]
})
export class OwnerRoutingModule { }