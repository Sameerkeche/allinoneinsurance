import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  courses:any =['BE','BCA','BTECH','BSC'];
  fn:any="Kavya";
 

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(frm:any){
    console.log(frm.value);
    // console.log(frm.value.fname);
    // console.log("Hello form is submitted");

}
}