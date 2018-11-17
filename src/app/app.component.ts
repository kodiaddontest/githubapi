import { Component, OnInit } from '@angular/core';
import {dataService} from '../app/service/data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'json-table';
  private emps:any=[];
  private emps1:any=[];

  constructor(private sou:dataService){}
  
  ngOnInit() {
    this.getuser();
  }

  getuser(){
    this.sou.getTable().subscribe(
      (res)=>{
        console.log('response is:',res);
        this.emps=res;
      },
    (err)=>{
      console.log('error is:',err);
    }
    )
  }

  getallData(id){
    this.sou.getuserAll(id).subscribe(
      (res)=>{
        console.log('response is:',res);
        this.emps1=res;
      },
    (err)=>{
      console.log('error is:',err);
    }
    )
  }
}
