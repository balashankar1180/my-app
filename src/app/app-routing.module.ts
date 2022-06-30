import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { BindingComponent } from './binding/binding.component';



const routes: Routes = [
  { component : StudentComponent, path : "student" },
  { component : BindingComponent, path : "bindings" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
