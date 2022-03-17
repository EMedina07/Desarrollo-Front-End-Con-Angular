import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit{
    public errorMessage : string = 'Pagina no encontrada en el sistema 404';
    
    constructor() { }

    ngOnInit(){

    }
}