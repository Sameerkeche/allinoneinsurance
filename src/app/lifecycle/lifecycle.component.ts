import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifeCycleComponent implements
 OnInit,
 OnChanges,
 DoCheck,
 OnDestroy
 {
Sample:any="hello Angular";
  constructor() {
    console.log("Constr")
   }

  ngOnInit(): void {
  }
ngOnDestroy(){
  console.log("hello thi is ngDestroy");
}
}
