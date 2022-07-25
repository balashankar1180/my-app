import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [ 
      // { path: '', component: AdminComponent },
      // { path: 'home/customer', component: CustomerComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
