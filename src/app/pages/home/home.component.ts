import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComent implements OnInit{
    public message : string = "Welcome to mean page";
    
    constructor() { }

    ngOnInit(){

    }
}