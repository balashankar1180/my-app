import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [ AppService ]
})
export class AppComponent implements OnInit {
title = 'Balu';
fontSize : number = 30;
titleStyles = { color : "red", fontStyle : "italic", fontWeight : "bold" };
// Note : write as per angular specification
onClick() : void {
alert("This is Event Binding. Buttons have some events. one of them is 'click' event. So, when you click the button, click event raises and method executed. ");
}
onClick2() : void {
alert("This is Style Binding. With Style Binding, you can apply multiple styles to the HTML element. For this, you use ngStyle directive in anglar. If you notice the button, we applied button text size as well as text color red.");
}
// Two-Way Data Bindig Section
userText : string = "Hello World";
public students = [];
constructor( private _appService : AppService ) { }
 
ngOnInit(): void {
  this._appService.getEmployees()
  .subscribe( data => this.students = data );
  
}
// ngFor Directive Section
// students : any[] = [
// { ID: '101', FirstName: 'Pranaya', DOB: '12/08/1988', Gender: 'Male', CourseFee: 1234.56 },
// { ID: '102', FirstName: 'Anurag', DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00 },
// { ID: '103', FirstName: 'Priyanka', DOB: '07/24/1992', Gender: 'Female', CourseFee: 6543.15 },
// { ID: '104', FirstName: 'Hina', DOB: '08/19/1990', Gender: 'Female', CourseFee: 9000.50 },
// { ID: '105', FirstName: 'Sambit', DOB: '04/12/1991', Gender: 'Male', CourseFee: 9876.54 },
// { ID: '106', FirstName: 'Tarun', DOB: '04/10/1992', Gender: 'Male', CourseFee: 1278.55 }
// ];
}
