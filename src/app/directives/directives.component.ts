import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
age:number=20;
showData:boolean=false;
stud:any=['Saee','Kavya','Sonali','Mangal'];
num:any=12;
testClass1:any;
testClass2:any;

myStyle1:any;
myStyle2:any;

  constructor() { }

  ngOnInit(): void {
  this.myStyle1={'background-color':'yellow','font-weight':'bold'};
  this.myStyle2={'background-color':'pink', 'font-weight':'italic' };

  if(this.age>19){
    this.testClass1='test1';
    this.testClass2='test2';
  }
  }

}
