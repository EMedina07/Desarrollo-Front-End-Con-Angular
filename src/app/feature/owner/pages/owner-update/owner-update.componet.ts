import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from './../../../../core/models/owner.interface';
import { OwnerForm } from './../../../../core/models/owner-class.model';
import { HttpRepositoryService } from './../../../../core/service/http-repository.service';

@Component({
    selector: 'owner-update',
    templateUrl: './owner-update.componet.html',
    styleUrls: ['./owner-update.componet.css']
})
export class OwnerUpdateComponent implements OnInit{
    private owner: Owner;
    public ownerGroup: FormGroup;
    private id : string = this.active.snapshot.params['id'];

    constructor(private httpRepository: HttpRepositoryService, private active: ActivatedRoute, private router: Router) { } 

    ngOnInit(){
        this.ownerGroup = new FormGroup({
            ownerId: new FormControl(),
            name: new FormControl(),
            birthDate: new FormControl(),
            address: new FormControl()
        });

        this.GetOwnerById();
    }

    public GetOwnerById(){
        let request = `api/Owner/GetOwnerByID?id=${this.id}`;

        this.httpRepository.Read(request)
            .subscribe(response => {
                this.owner = response as Owner;
                this.ownerGroup.patchValue(this.owner);
            })
    }

    public UpdateOwner(ownerFormValue){
        let ownerForm = new OwnerForm();
        ownerForm.name = ownerFormValue.name;
        ownerForm.address = ownerFormValue.address; 
        ownerForm.birthDate = ownerFormValue.birthDate;

        let request = `api/Owner/UpdateOwner?id=${this.id}`;

        this.httpRepository.Update(request, ownerForm)
            .subscribe(completed => {
                alert("Registro modificado");
            })
    }
}