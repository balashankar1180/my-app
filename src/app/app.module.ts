import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student/student.service';
import { AppService } from './app.service';
import { UsercolorService } from './usercolor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { InterfaceComponent } from './interface/interface.component';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { SingleAComponent } from './single/single-a/single-a.component';
import { SingleBComponent } from './single/single-b/single-b.component';




@NgModule({
  declarations: [ AppComponent, StudentComponent, BindingComponent, InterfaceComponent, DirectiveComponent, HomeComponent, SingleComponent, SingleAComponent, SingleBComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    NgbModule,
    RouterModule
  ],
  providers: [ StudentService, AppService, UsercolorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

