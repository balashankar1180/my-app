import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from '../Modules/account/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<SignupComponent> {
  
  canDeactivate(component: SignupComponent): boolean  {
    if(component.isDirty){
      return window.confirm("you have some unsaved changes. sure you want to leave?")
    }
    return true;
  }
 
  
}


// canDeactivate(component: SignupComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//   throw new Error('Method not implemented.');
// }