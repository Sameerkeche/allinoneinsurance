import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crudapp',
  templateUrl: './crudapp.component.html',
  styleUrls: ['./crudapp.component.css']
})
export class CrudappComponent implements OnInit {
  myForm:any;
  showTable:any;
  count:any;
  data1:any=[];
  showData:boolean=false;
  fna:any;
  ln:any;
  mail:any;
  pas:any;
  cpas:any;

  editIndex:any;
  showButton:boolean=false;
  submitButton:boolean=true;

  id:any;
  isFormSubmitted:boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      fname:["Saee",[Validators.required]],
      lname:['',[Validators.required,Validators.maxLength(7)]],
      email:['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass:[''],
      cpass:['']
    })
  }
  get f(){
    return this.myForm.controls;
  }
  onSubmitReactiveForm(i:any){
    console.log("Hello");
    this.data1.push(i.value);
    if(this.data1.length>0){
      this.showData=true;
    }
    console.log(this.data1);
     console.log(this.myForm.value);
      }
onDelete(j:any){
  console.log("Data Sucessfully Deleted");
  console.log(j);
  console.log(this.data1.indexOf(j));
  this.id=this.data1.indexOf(j);
  this.data1.splice(this.id,1);
}
onupdate(k:any){
  console.log("updated");
  console.log(k.value);
  this.fna=k.fname;
  this.ln=k.lname;
  this.mail=k.email;
  this.pas=k.pass;
  this.cpas=k.cpass;
  this.data1.splice(this.editIndex,1,k.value);
  
  this.editIndex=this.data1.indexOf(k)
  this.showButton=true;
  this.submitButton=false;

//   this.count;
//   console.log(k.value);
//   this.data1.push(k.value);
//   if(this.data1.maxLength>0)
// {
//   this.showTable(true);
// }
// console.log(this.data1);
// console.log(this.count);
// }
}
}