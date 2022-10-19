import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
name:string="Saee";
aname:string="keche";
arra:any=['Saee','Pari','Swara','Manu'];
link:any;
fname:any="College";
  constructor() { }

  ngOnInit(): void {this.link="https://www.google.com/"
  }
Click(){
  console.log("Event Binding");

}
}
