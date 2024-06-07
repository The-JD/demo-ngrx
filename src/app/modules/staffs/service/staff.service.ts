import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Staff {
  id: number; // Replace with appropriate ID type
  name: string;
}

const staffData: Staff[] = [
  // Define some initial staff data here
];

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  getStaff(): Observable<Staff[]> {
    return of(staffData);
  }

  addStaff(name: string): Observable<Staff> {
    console.log('name: ', name)
    const newStaff: Staff = { id: staffData.length + 1, name }; // Generate a new ID
    staffData.push(newStaff);
    return of(newStaff);
  }
}
