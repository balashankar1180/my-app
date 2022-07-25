import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iemployee } from './employee';
import { Observable  } from 'rxjs';
import { User } from './Inter/user';



@Injectable({
  providedIn: 'root'
})
export class AppService {  // Service to get data from http Service
  private _url: string ="/assets/data/employees.json";
  constructor(private http : HttpClient){ }
  getEmployees() : Observable<Iemployee[]>{
  return this.http.get<Iemployee[]>(this._url)
  }
  
  getUsers() : Observable<User[]>{
  return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }
  // Method to get data Fake REST API
  getUser(name : string) : Promise<User>{
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + name).toPromise();
    }
  }
