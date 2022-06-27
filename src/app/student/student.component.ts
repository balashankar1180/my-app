import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { StudentService } from './student.service';
import { IStudent } from './student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [ StudentService ]
})
export class StudentComponent implements OnInit {
student : IStudent[]; // Write Interface comment here
  constructor( private _studentService : StudentService ) {
    
  }

  ngOnInit() {
    // this.student =this._studentService.getStudents();
  }
  columnDefs: ColDef[] = [
    { field: 'ID' },
    { field: 'FirstName' },
    { field: 'DOB' },
    { field: 'Gender' },
    { field: 'CourseFee' },
];

rowData = this._studentService.getStudents(); // Place array of data [ { data1}, { data2}, { data3} ];

}
