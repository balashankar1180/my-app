import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './Interfaces/user';
import { UserService } from './Services/user.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

users : User[] = [];
  constructor( private _route : ActivatedRoute ) {
   
   }

  ngOnInit() {
    // this._user.getUsers()
    // .subscribe(data => this.users = data);
    this.users = this._route.snapshot.data['userList'];
  }

}
