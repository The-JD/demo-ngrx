import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Student {
  id: number; // Replace with appropriate ID type
  name: string;
}

const studentData: Student[] = [
  // Define some initial student data here
];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(): Observable<Student[]> {
    return of(studentData);
  }

  addStudent(name: string): Observable<Student> {
    const newStudent: Student = { id: studentData.length + 1, name }; // Generate a new ID
    studentData.push(newStudent);
    return of(newStudent);
  }
}
