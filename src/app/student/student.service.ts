import { Injectable } from "@angular/core";  // Injectable : Used to Inject Services
import { IStudent } from "./student";  // IStudent : Interface which contains Student Data Specifications

@Injectable()  // @Injectable() : Decorator tells Angular that StudentService is a Service. Otherwse it is treated as Component.
export class StudentService {
getStudents() : IStudent[] { // getStudents() : Method contains the Student Data
return [
{ ID: '101', FirstName: 'Pranay', DOB: '12/08/1988', Gender: 'Male', CourseFee: 1234.56 },
{ ID: '102', FirstName: 'Anurag', DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00 },
{ ID: '103', FirstName: 'Priyanka', DOB: '07/24/1992', Gender: 'Female', CourseFee: 6543.15 },
{ ID: '104', FirstName: 'Hina', DOB: '08/19/1990', Gender: 'Female', CourseFee: 9000.50 },
{ ID: '105', FirstName: 'Sambit', DOB: '04/12/1991', Gender: 'Male', CourseFee: 9876.54 },
{ ID: '106', FirstName: 'Tarun', DOB: '04/10/1992', Gender: 'Male', CourseFee: 1278.55 },
{ ID: '107', FirstName: 'Balu', DOB: '04/10/1992', Gender: 'Male', CourseFee: 1278.55 },
{ ID: '108', FirstName: 'Emma', DOB: '06/11/1992', Gender: 'Female', CourseFee: 6000.00 },
{ ID: '109', FirstName: 'Jeevan', DOB: '05/10/1992', Gender: 'Male', CourseFee: 6020.55 },
{ ID: '110', FirstName: 'Janani', DOB: '03/10/1992', Gender: 'Female', CourseFee: 2000.55 },
{ ID: '111', FirstName: 'Rohan', DOB: '09/11/1992', Gender: 'Female', CourseFee: 6000.00 },
{ ID: '112', FirstName: 'Tarun', DOB: '04/10/1992', Gender: 'Male', CourseFee: 1278.55 },
{ ID: '113', FirstName: 'Balu', DOB: '04/10/1992', Gender: 'Male', CourseFee: 1278.55 },
{ ID: '114', FirstName: 'Emma', DOB: '06/11/1992', Gender: 'Female', CourseFee: 6000.00 },
{ ID: '115', FirstName: 'Jeevan', DOB: '05/10/1992', Gender: 'Male', CourseFee: 6020.55 },
{ ID: '116', FirstName: 'Janani', DOB: '03/10/1992', Gender: 'Female', CourseFee: 2000.55 },
{ ID: '117', FirstName: 'Rohan', DOB: '09/11/1992', Gender: 'Female', CourseFee: 6000.00 }
];
}
}
