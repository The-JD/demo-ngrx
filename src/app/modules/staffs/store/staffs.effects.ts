import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as fromStaffActions from './staffs.actions';
import { StaffService } from '../service/staff.service';
// import { StaffService } (Replace with your staff data service); // Import your staff data service

@Injectable()
export class StaffEffects {

  addStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStaffActions.addStaff),
      mergeMap(({ name }) =>
        this.staffService.addStaff(name).pipe(
          map(() => fromStaffActions.addStaffsSuccess()),
          catchError((error) => of(fromStaffActions.addStaffsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private staffService: StaffService) {}
}
