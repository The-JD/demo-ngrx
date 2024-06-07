import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as fromStudentActions from './student.actions';
import { StudentService } from '../service/student.service';
// import { StudentService } (Replace with your student data service); // Import your student data service

@Injectable()
export class StudentEffects {

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStudentActions.addStudent),
      mergeMap(({ name }) =>
        this.studentService.addStudent(name).pipe(
          map(() => fromStudentActions.addStudentsSuccess()),
          catchError((error) => of(fromStudentActions.addStudentsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private studentService: StudentService) {}
}
