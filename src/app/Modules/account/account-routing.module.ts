import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UnsavedGuard } from 'src/app/Guards/unsaved.guard';

const routes: Routes = [
{ path: '', component: AccountComponent },
{ path: 'signup', component: SignupComponent, canDeactivate:[UnsavedGuard], children : [{path : 'account/login', component : LoginComponent }] },
{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
