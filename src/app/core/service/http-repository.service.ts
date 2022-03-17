import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class HttpRepositoryService{

    private host = environment.urlAddress;

    constructor(private http: HttpClient) { }

    public Create(request: string, body: any){
        return this.http.post(this.CreateRequestHttp(request), body, this.getHeaders());
    }

    public Read(request: string){
        return this.http.get(this.CreateRequestHttp(request));
    }

    public Update(request: string, body : any){
        return this.http.put(this.CreateRequestHttp(request), body, this.getHeaders());
    }

    public Delete(request: string){
        return this.http.delete(this.CreateRequestHttp(request));
    }

    private CreateRequestHttp(request: string){
        return `${this.host}/${request}`;
    }

    private getHeaders(){
        return {
            headers: new HttpHeaders({'content-type':'application/json'})
        }
    }
}