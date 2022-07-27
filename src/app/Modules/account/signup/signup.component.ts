import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isDirty=true;
  name = new FormControl('');

  userForm: FormGroup;
  
  
  updateName() {
  this.name.setValue('Nancy');
  }
  
  addSkillButtonClick():void{
    (<FormArray>this.userForm.get("skills")).push(this.addfewSkill());
    
  }



  

  addfewSkill():FormGroup
  {
    return new FormGroup({
        skillName: new FormControl(''),
        profeciency:new FormControl('') 
       })
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
    console.log((<FormArray>this.userForm.get("skills")).controls);
    this.userForm.reset();
  }




  // @ViewChild("empForm") public createempform: NgForm;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      fName: new FormControl('',[Validators.required,Validators.minLength(10)]),
      lName: new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.email, this.validateEmail]),
      pswd: new FormControl(''),
      skills : new FormArray([
        this.addfewSkill()
        
        // new FormGroup({
        //   skillName: new FormControl(''),
        //   profeciency:new FormControl('') 
        // })
          
  
      ])
      
  
    });
  
  }


  validateEmail(control: AbstractControl): { [key: string]: any } | null {
    const email: string = control.value;
    const domain = email != null ?email.substring(email.lastIndexOf('@') + 1): '';
    if (email === '' || domain.toLowerCase() === 'scoriait.com') {
      return null;
    } else {
      return { 'validateEmail': true };
      
    }
  }

}
