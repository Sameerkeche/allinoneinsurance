import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
sampleText:string="Sameer";
courses:any=['BCA','BCS','MCA'];
date=new Date();
data:any=[
  {name:"Saee",age:10},
  {name:"Saee",age:10},
  {name:"Saee",age:10},
];
salary:any=10000;
  constructor() { }

  ngOnInit(): void {
  }

}
