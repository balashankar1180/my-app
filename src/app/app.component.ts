import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [ AppService ]
})
export class AppComponent implements OnInit {

// ****** Code for Data Bidings Section ******
fontSize : number = 30;
titleStyles = { color : "red", fontStyle : "italic", fontWeight : "bold" };
// An Object consisting of CSS Properties and applied CSS Properties are as per Angular Specification.
onClick() : void {
alert("This is Event Binding. Buttons have some events. one of them is 'click' event. So, when you click the button, click event raises and method executed. ");
}
onClick2() : void {
alert("This is Style Binding. With Style Binding, you can apply multiple styles to the HTML element. For this, you use ngStyle directive in anglar. If you notice the button, we applied button text size as well as text color red.");
}

// ****** Two-Way Data Bindig Section ******
userText : string = "";

// ****** Code for Getting Data from http Service  ******
public students = [];
constructor( private _appService : AppService ) { }
ngOnInit(): void {
this._appService.getEmployees()
.subscribe( data => this.students = data);

}


} // Closing of AppComponent Class

