import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive1',
  templateUrl: './directive1.component.html',
  styleUrls: ['./directive1.component.css']
})
export class Directive1Component implements OnInit {
  age:number=33;
  showData:boolean=false;
  study:any=['Saee','Sonali','Kavya','Mangal','Shree'];
  num:any="1";
  testclass1:any;
  testclass2:any;
  
  myStyle1:any;
  myStyle2:any;
  constructor() { }

  ngOnInit(): void {
    this.myStyle1={'background-color':'Darkpink','font-weight':'Bold'};
    this.myStyle2={'background-color':'Green','font-weight':'italic'};
    if(this.age>30)
    {
      this.testclass1="test1";
      this.testclass2="test2";
    }
  }

}
