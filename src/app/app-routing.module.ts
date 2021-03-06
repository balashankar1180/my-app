import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { BindingComponent } from './binding/binding.component';
import { InterfaceComponent } from './interface/interface.component';
import { DirectiveComponent } from './directive/directive.component';
import { SingleComponent } from './single/single.component';
import { SingleAComponent } from './single/single-a/single-a.component';
import { SingleBComponent } from './single/single-b/single-b.component';
import { UserComponent } from './user/user.component';
import { UserChildComponent } from './user-child/user-child.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './admin/customer/customer.component';

const routes: Routes = [
{ component : HomeComponent, path : "home",
children: [ { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) } ]
},

{ component : StudentComponent, path : "student" },
{ component : BindingComponent, path : "bindings" },
{ component : InterfaceComponent, path : "interface" },
{ component : DirectiveComponent, path : "directive" },
{ component : SingleComponent, path : "single",
children: [ { path:'sing-a', component: SingleAComponent }, { path:'sing-b', component: SingleBComponent } ] },
{ component : UserComponent, path : "user" },
{ component : UserChildComponent, path : "user/:name" },
// { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [ SingleComponent, SingleAComponent, SingleBComponent ];
