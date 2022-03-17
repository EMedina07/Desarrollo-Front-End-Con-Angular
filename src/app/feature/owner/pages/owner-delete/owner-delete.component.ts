import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRepositoryService } from './../../../../core/service/http-repository.service';

@Component({
    selector: 'owner-delete',
    templateUrl: './owner-delete.component.html',
    styleUrls: ['./owner-delete.component.css']
})
export class OwnerDeleteComponet implements OnInit{
    constructor(private active: ActivatedRoute, private httpRepository: HttpRepositoryService) { }

    ngOnInit(){
        this.DeleteOwner();
    }

    public DeleteOwner(){
        let id = this.active.snapshot.params['id'];
        let request = `api/Owner/DeleteOwner?id=${id}`;

        this.httpRepository.Delete(request)
            .subscribe(complete => {
                alert("El registro fue eliminado");
            })
    }
}