import { Component, OnInit } from '@angular/core';
import { UsercolorService } from '../usercolor.service';

@Component({
selector: 'app-binding',
templateUrl: './binding.component.html',
styleUrls: ['./binding.component.css'],
})

export class BindingComponent implements OnInit {
// ****** Code for Singleton Service ******
constructor( private _userColor : UsercolorService ) { }
ngOnInit() { }
get colour() : string {
return this._userColor.userColor;
}
set colour(value : string) {
this._userColor.userColor = value;
  }
// Code for Interpolation and Property Binding
user1: string = "Hello World";
user2: string = "Property Binding";
isDisabled: boolean = true;
classToApply: string = "colorClass italicClass";
applyBoldClass: boolean = true;
  // ****** Code for Data Bidings Section ******
fontSize : number = 30;
titleStyles = { color : "black", fontWeight : "bold" };
// An Object consisting of CSS Properties and applied CSS Properties are as per Angular Specification.
onClick() : void {
alert("This is Event Binding. Buttons have some events. one of them is 'click' event. So, when you click the button, click event raises and method executed. ");
}
onClick2() : void {
alert("This is Style Binding. With Style Binding, you can apply multiple styles to the HTML element. For this, you use ngStyle directive in anglar. If you notice the button, we applied button text size as well as text color red.");
}

// ****** Two-Way Data Bindig Section ******
fname : string = "";
lname : string = "";
country : string = "";
getInfo() : void { alert("Thank You!"); }



}
