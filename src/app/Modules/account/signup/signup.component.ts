import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isDirty=true;
  // @ViewChild("empForm") public createempform: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
