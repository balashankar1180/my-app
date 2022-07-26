import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isDirty=true;
  name = new FormControl('');
  updateName() {
  this.name.setValue('Nancy');
  }
  userForm = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl(''),
    email: new FormControl(''),
    pswd: new FormControl('')
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
    this.userForm.reset();
  }




  // @ViewChild("empForm") public createempform: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
