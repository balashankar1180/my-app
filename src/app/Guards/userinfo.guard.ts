import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Inter/user';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class UserinfoGuard implements Resolve<User[]> {
  constructor( private app : AppService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
   return this.app.getUsers();
  }
 
  
}
// throw new Error('Method not implemented.');