import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { User } from '../Inter/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 users : User[] = [];
  constructor( private app : AppService) { }
  
  ngOnInit() {
    this.app.getUsers()
    .subscribe(data => this.users = data);
  }
 getUser(name : string) {
  
 }
}
