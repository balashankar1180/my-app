import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import {CustomValidators} from './custom.validators' 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isDirty=true;
  userForm: FormGroup;
  constructor(private x:FormBuilder) { }
  ngOnInit()
  {
  /*
  Instantiation of FormGroup, passing the collection of child/form controls as a first argument.
  The key for each child registers is the name for the control.
  */
  /*
  this.userForm = new FormGroup({
  fName : new FormControl('',[Validators.required,Validators.minLength(10)]),
  lName: new FormControl(''),
  email: new FormControl('',[Validators.required, Validators.email, CustomValidators.validateEmail]),//this.validateEmail]),
  pswd: new FormControl(''),
  skills : new FormArray([ this.addfewSkill() ])
  });
  */
  this.userForm = this.x.group({
  fName : ['', [Validators.required, Validators.minLength(5)]],
  lName : ['', [Validators.required, Validators.minLength(5)]],
  email : ['', [Validators.required, Validators.email, CustomValidators.validateEmail]],
  pswd  : ['', [Validators.required, Validators.minLength(5)]],
  skills : this.x.array([ this.addfewSkill() ])
    });
  }

  addfewSkill() : FormGroup // Method contains array of two controls skillName and proficiency
  {
  return new FormGroup({
  skillName : new FormControl('', [Validators.required]),
  profeciency : new FormControl('', [Validators.required]) 
  })
  }
  addSkillButtonClick() : void // Method to call when button is clicked to add one more set of skills
  {
  (<FormArray>this.userForm.get("skills")).push(this.addfewSkill());
  }
  onSubmit()
  {
  console.log(this.userForm.value); // To log Form values to console
  ////////////////this.userForm.reset(); // To reset the form input fields when submit is clicked.


  console.log((<FormGroup>(<FormArray>this.userForm.get('skills')).controls[0]).controls['skillName'].value);
  }




  
  validateEmail(control : AbstractControl) : { [key: string] : any } | null
  {
  const email : string = control.value;
  const domain = email != null ? email.substring(email.lastIndexOf('@') + 1): ''; // Need to explore
  if (email === '' || domain.toLowerCase() === 'scoriait.com') {
  return null;
  } else
  {
  return { 'validateEmail': true };
  }
  }
}
