import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-capp',
  templateUrl: './capp.component.html',
  styleUrls: ['./capp.component.css']
})
export class CappComponent implements OnInit {
//course:any=["BCA","MCA","MCS","BCS","MBA"];
  mForm:any;
  isFormSubmitted:boolean=true;
  showTable:any;
  data1:any=[];
  showData:boolean=false;

  fname:any;
  mname:any;
  lname:any;
  gender:any;
  adrs:any;
  mail:any;
  pass:any;
  repass:any;

  editIndex:any;
  showButton:boolean=false;
  submitButton:boolean=true;
  id:any;
  //isFormSubmitted:boolean=false;
  constructor(private fc:FormBuilder) { }

  ngOnInit(): void {
    this.mForm=this.fc.group({
      fname:["Kavya",[Validators.required]],
      mname:['',[Validators.required,Validators.maxLength(9)]],
      lname:[''],
      adrs:[''],
      gender:[''],
      email:['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass:[''],
      cpass:['']
    })
  }
  get f()
  {
    return this.mForm.controls;
  }
  onSubmitReactiveForm(n:any){
    console.log("Hello This is simple form");
    console.log(this.mForm.value)
    this.data1.push(this.mForm.value);
    // if(this.data1.length>0){
    this.showData=true;
    //}
    console.log(this.data1);
    console.log(this.mForm.value);
  }
  onDelete(a:any){
    console.log("data Sucessfully Deleted");
    console.log(a);
    console.log(this.data1.indexOf(a));
    this.id=this.data1.indexOf(a);
  this.data1.splice(this.id,1);
  }
  onupdate(k:any){
    console.log("updated");
    console.log(k.value);
    this.fname=k.fname;
    this.mname=k.mname;
    this.lname=k.lname;
    this.adrs=k.adrs;
    this.mail=k.email;
    this.data1.splice(this.editIndex,1,k.value);
    
    this.editIndex=this.data1.indexOf(k)
    this.showButton=true;
    this.submitButton=false;
}
}