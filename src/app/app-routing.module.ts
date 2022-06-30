import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { BindingComponent } from './binding/binding.component';
import { InterfaceComponent } from './interface/interface.component';
import { DirectiveComponent } from './directive/directive.component';


const routes: Routes = [
  { component : StudentComponent, path : "student" },
  { component : BindingComponent, path : "bindings" },
  { component : InterfaceComponent, path : "interface" },
  { component : DirectiveComponent, path : "directive" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
