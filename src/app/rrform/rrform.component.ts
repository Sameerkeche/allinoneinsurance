import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rrform',
  templateUrl: './rrform.component.html',
  styleUrls: ['./rrform.component.css']
})
export class RrformComponent implements OnInit {
myForm:any;
isFormSubmmited:boolean=true;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      fname:["Saee",[Validators.required]],
      lname:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass:[''],
      cpass:[]
    })
  }
get F(){
  return this.myForm.controls;
}
onSubmitedReactiveForm(){
  console.log("Hello");
  console.log(this.myForm.value);
  this.isFormSubmmited=true;
}
updateName() {
  
}
}
