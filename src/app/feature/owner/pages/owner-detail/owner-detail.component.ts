import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRepositoryService } from './../../../../core/service/http-repository.service';
import { OwnerDetail } from './../../../../core/models/owner-detail.model';

@Component({
    selector: 'owner-datail',
    templateUrl: './owner-detail.component.html',
    styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit{
    public ownerDetails : OwnerDetail[]

    constructor(private httpRepository: HttpRepositoryService, private active: ActivatedRoute) { }

    ngOnInit(){
        this.GetOwnerDetail();
    }

    public GetOwnerDetail(){
        let id = this.active.snapshot.params['id'];
        let request = `api/Owner/GetOwnerDetail?id=${id}`;

        this.httpRepository.Read(request)
            .subscribe(response => {
                this.ownerDetails = response as OwnerDetail[];
            });
    }
}