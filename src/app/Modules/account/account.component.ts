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

constructor( private fb : FormBuilder ) { }
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
})
});
}
onSubmit() {
  console.log(this.accountForm.value);
  this.accountForm.reset();
}




}
