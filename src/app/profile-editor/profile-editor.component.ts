import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    address:new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state:new FormControl(''),
    zip:new FormControl(''),
    })
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.profileForm.value);
}
updateProfile(){
  this.profileForm.patchValue({
    firstName:'Kavya',
    address:{
      street:'123 Akluj'
    }
  });
}
}
