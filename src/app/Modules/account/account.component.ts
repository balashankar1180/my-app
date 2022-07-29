import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

accountForm : FormGroup;

constructor( private fb : FormBuilder ) { } // FormBuilder initialization should be done in constructor only
ngOnInit() {
this.accountForm = this.fb.group({
fname : ['', [Validators.required, Validators.minLength(10)]],
lname: ['', Validators.required],
email: ['', Validators.required],
country: ['', Validators.required],
address : this.fb.group({
city: ['', Validators.required],
street: ['', Validators.required],
pin: ['', Validators.required]
}),
skills : new FormArray([this.skill()]) // It is in the accountForm formgroup
});
} // Closing of ngOnInit()

skill() : FormGroup // Method contains array of two controls skillName and proficiency
{
return this.fb.group({
skill : new FormControl(''),
prof : new FormControl('')
})
}

addSkills() : void // Method to call when button is clicked to add one more set of skills
{
(<FormArray>this.accountForm.get("skills")).push(this.skill());
}

onSubmit()
{
console.log(this.accountForm.value);
this.accountForm.reset();
}


} // Closing of AccountComponent
