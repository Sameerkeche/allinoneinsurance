import { Component, OnInit } from '@angular/core';
import { DataService } from'../Service/data.service';
import { Data2Service } from '../Service/data2.service';


@Component({
  selector: 'app-servicedata',
  templateUrl: './servicedata.component.html',
  styleUrls: ['./servicedata.component.css']
})
export class ServicedataComponent implements OnInit {
postData:any;
  constructor(private mySer: DataService, private mySer2: Data2Service) { 
    this.dataFromService();
    this.getDataFromBackend();
    this.getDataFromService2();
  }

  ngOnInit(): void {
  }
  dataFromService(){
    this.mySer.getData().subscribe(
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )    
  }

  getDataFromBackend(){
    console.log("Well Come to angular component");
    this.mySer.getRealTimeData().subscribe(
      (res:any)=>{
        console.log(res);
        this.postData = res;
        console.log(this.postData);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

  getDataFromService2(){
    this.mySer2.getData().subscribe(
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
    //console.log(this.mySer2.getData());
  }
}
