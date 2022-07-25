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
import { AdminGuard } from './Guards/admin.guard';
import { SuperAdminGuard } from './Guards/super-admin.guard';
import { CustomerGuard } from './Guards/customer.guard';
// import { AdminComponent } from './admin/admin.component';
// import { CustomerComponent } from './admin/customer/customer.component';

const routes: Routes = [
{ component : HomeComponent, path : "home", children:[{path:'admin', component:AdminComponent},{path:'customer', component:CustomerComponent}]},
// {path:'home/admin' ,loadChildren: '../admin/admin.module#AdminModule'}, //for eager loading

//{path:'home/admin' ,loadChildren: './admin/admin.module#AdminModule'}
// children: [ { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) } ]




// {path:'admins',loadChildren: './admin/admin.module#AdminModule'},


{ component : StudentComponent, path : "student" },
{ component : BindingComponent, path : "bindings" },
{ component : InterfaceComponent, path : "interface", canActivate: [AdminGuard] }, // canActivate has array of values. and all need to be true. If any of them evaluate to false, canActivate resolves to false.
{ component : DirectiveComponent, path : "directive" },
{ component : SingleComponent, path : "single", canActivate: [AdminGuard], canActivateChild : [SuperAdminGuard],
children : [
{ path:'sing-a', component: SingleAComponent, canActivate: [AdminGuard] },
{ path:'sing-b', component: SingleBComponent } ] },
{ component : UserComponent, path : "user" },
{ component : UserChildComponent, path : "user/:name" },
{ path: 'customer', canLoad: [CustomerGuard], loadChildren: () => import('./Modules/customer/customer.module').then(m => m.CustomerModule) },
{ path: 'login', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) },
{ path: 'account', loadChildren: () => import('./Modules/account/account.module').then(m => m.AccountModule) },
// { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  // declarations:[AdminComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [ SingleComponent, SingleAComponent, SingleBComponent ];
