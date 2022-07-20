import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { UsercolorService } from '../usercolor.service';

@Component({
selector: 'app-directive',
templateUrl: './directive.component.html',
styleUrls: ['./directive.component.css'],
providers: [ AppService ]
})
export class DirectiveComponent implements OnInit {
public students = [];
sM:string;
constructor( private _AppService : AppService, private _userColor : UsercolorService ) { }
ngOnInit()
{
this._AppService.getEmployees()
.subscribe(data => this.students = data ,(err)=>{this.sM='Service currently unavailable';
console.log(this.sM); alert(this.sM);});
}

// ****** Begin : Code for Singleton Service ******
get colour() : string {
return this._userColor.userColor;
}
set colour(value : string) {
this._userColor.userColor = value;
}
// ****** End : Code for Singleton Service ******

}