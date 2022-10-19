import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private ser:DataService) { }

  ngOnInit(): void {
    const prom=new Promise(function(resolve,reject){
      setTimeout(() => {
        resolve("Promise resolved");
        reject("Promise Reject")
         }, 4000);
    });
 prom.then((value:any)=>{
  console.log("Promise exexuted" +value);
 })
 .catch((value:any)=>{
  console.log("promise Not Executed" +value)
 });
  }
  getDataFromPromise(){
    this.ser.getPromData()
    .then((res:any)=>{
      console.log(res);
    })
      .catch((err:any)=>{
        console.log(err);
      });
    }
  }

