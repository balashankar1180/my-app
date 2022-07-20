// ****** Modules  ******
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// ****** Components  ******
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { BindingComponent } from './binding/binding.component';
import { InterfaceComponent } from './interface/interface.component';
import { DirectiveComponent } from './directive/directive.component';
import { SingleComponent } from './single/single.component';
import { SingleAComponent } from './single/single-a/single-a.component';
import { SingleBComponent } from './single/single-b/single-b.component';

// ****** Services  ******
import { StudentService } from './student/student.service';
import { AppService } from './app.service';
import { UsercolorService } from './usercolor.service';
import { UserComponent } from './user/user.component';
import { UserChildComponent } from './user-child/user-child.component';

@NgModule({
declarations : [ // ******  Declarations  ******
AppComponent, StudentComponent,
BindingComponent, InterfaceComponent,
DirectiveComponent, HomeComponent,
SingleComponent, SingleAComponent,
SingleBComponent, ArrayOfComponents, UserComponent, UserChildComponent
],
imports: [ // ******  Imports  ******
BrowserModule, HttpClientModule, AppRoutingModule,
FormsModule, AgGridModule.withComponents([]),
NgbModule, RouterModule
],
providers: [ StudentService, AppService, UsercolorService ], // ******  Providers  ******
bootstrap: [AppComponent]
} )
export class AppModule { }
