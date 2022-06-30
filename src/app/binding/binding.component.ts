import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  user : string = "Balashankar Gujja";
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
userText : string = "";
  constructor() { }

  ngOnInit() {
  }


}
