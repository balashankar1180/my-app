import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { UsercolorService } from '../usercolor.service';

@Component({
selector: 'app-directive',
templateUrl: './directive.component.html',
styleUrls: ['./directive.component.css'],
providers: [ AppService, UsercolorService ]
})
export class DirectiveComponent implements OnInit {
public students = [];
constructor( private _AppService : AppService, private _userColor : UsercolorService ) { }
ngOnInit()
{
this._AppService.getEmployees()
.subscribe(data => this.students = data );
}
get color() : string {
    return this._userColor.userColor;
    }
    set color(value : string) {
    this._userColor.userColor = value;
    }
}
