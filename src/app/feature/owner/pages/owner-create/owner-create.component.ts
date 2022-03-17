import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { HttpRepositoryService } from './../../../../core/service/http-repository.service';
import { OwnerForm } from './../../../../core/models/owner-class.model';

@Component({
    selector: 'owner-create',
    templateUrl: './owner-create.component.html',
    styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit{
    public owner: OwnerForm;
    public ownerGroup: FormGroup;

    constructor(private httpRepository: HttpRepositoryService, private router: Router) { }

    ngOnInit(){
        this.ownerGroup = new FormGroup({
            name: new FormControl(),
            birthDate: new FormControl(),
            address: new FormControl()
        });
    }

    public CreateOwner(ownerFormValue){
        this.owner = new OwnerForm();
        this.owner.name = ownerFormValue.name;
        this.owner.birthDate = ownerFormValue.birthDate;
        this.owner.address = ownerFormValue.address;

        let request = 'api/Owner/CreateOwner';

        this.httpRepository.Create(request, this.owner)
            .subscribe(completed => {
                alert("Datos registrados correctamente");
            })
    }
}