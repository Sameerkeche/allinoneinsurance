import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-livecode',
  templateUrl: './livecode.component.html',
  styleUrls: ['./livecode.component.css']
})
export class LivecodeComponent implements OnInit {
name=new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
updateName(){
  this.name.setValue("Pari");
}
}
