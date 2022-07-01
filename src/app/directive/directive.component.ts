import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
  providers: [ AppService ]
})
export class DirectiveComponent implements OnInit {
public students = [];
  constructor( private _AppService : AppService ) { }

  ngOnInit() {
    this._AppService.getEmployees()
    .subscribe(data => this.students = data );
   
  }

}
