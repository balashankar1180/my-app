import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoGuard } from 'src/app/Guards/userinfo.guard';

import { CustomerComponent } from './customer.component';

const routes: Routes = [{ path: '', component: CustomerComponent, resolve : { userList : UserinfoGuard} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
