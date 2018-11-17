import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class dataService{

    constructor(private http:HttpClient){}
    getTable(){
        return this.http.get("https://api.github.com/users");
    }
    getuserAll(id){
        return this.http.get("https://api.github.com/users"+"/"+id);
    }
    searchuser(){
        return this.http.get("https://api.github.com/search/users?q=:login&&node_id");
    }
}