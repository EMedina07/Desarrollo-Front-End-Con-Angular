import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRepositoryService } from './../../../../core/service/http-repository.service'
import { Owner } from './../../../../core/models/owner.interface'

@Component({
    selector: 'owner-list',
    templateUrl: './owner-list.component.html',
    styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit{
    public owners: Owner[];

    constructor(private router: Router, private httpRepository: HttpRepositoryService) {}

    ngOnInit(){
        this.GetOwners();
    }

    public GetOwners(){
        let request: string = 'api/Owner/GetOwner';

        this.httpRepository.Read(request) 
            .subscribe(response => {
                this.owners = response as Owner[]
            });
    }

    public RedirectToUpdate(id){
        let urlPage = `/owner/update/${id}`;
        this.router.navigate([urlPage]);
    }

    public RedirectToDelete(id){
        let urlPage = `/owner/delete/${id}`;
        this.router.navigate([urlPage]);
    }

    public RedirectToDetail(id){
        let urlPage = `/owner/detail/${id}`;
        this.router.navigate([urlPage]);
    }
}