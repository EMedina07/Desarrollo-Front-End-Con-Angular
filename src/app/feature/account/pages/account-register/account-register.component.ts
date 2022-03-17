import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpRepositoryService } from './../../../../core/service/http-repository.service';
import { Account } from './../../../../core/models/account-class.model';
import { OwnerSelection } from './../../../../core/models/ownerSelection.model';

@Component({
    selector: 'account-register',
    templateUrl: './account-register.component.html',
    styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit{
    public ownerList: OwnerSelection[];
    public accountForm: FormGroup;

    constructor(private httpRepository: HttpRepositoryService) { }

    ngOnInit(){
        this.GetOwnerBySelect();

        this.accountForm = new FormGroup({
            ownerId: new FormControl(),
            accountType: new FormControl(),
            createDate: new FormControl()
        })
    }

    public GetOwnerBySelect(){
        let request = 'api/Account/OwnerForSelection';

        this.httpRepository.Read(request)
            .subscribe(response => {
                this.ownerList = response as OwnerSelection[]
            });
    }

    public RegisterAccount(accounformvalue){
        let account = new Account();
        account.ownerId = Number.parseInt(accounformvalue.ownerId);
        account.accountType = accounformvalue.accountType;
        account.createDate = accounformvalue.createDate;

        let request = 'api/Account/RegisterAcccount';

        this.httpRepository.Create(request, account)
            .subscribe(complete => {
                alert("Cuenta registrada");
            })
    }
}