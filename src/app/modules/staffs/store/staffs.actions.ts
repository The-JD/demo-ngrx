import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Staffs] Increment');
export const decrement = createAction('[Staffs] Decrement');
export const reset = createAction('[Staffs] Reset');

export const loadStaffs = createAction('[Staffs] Load Staffs');
export const addStaff = createAction('[Staff] Add Staff', props<{ name: string }>());

export const loadStaffsSuccess = createAction(
    '[Staffs] Load Staffs Success',
    props<{ staffs: any[] }>()
);

export const loadStaffsFailure = createAction(
    '[Staffs] Load Staffs Failure',
    props<{ error: any }>()
);

export const addStaffsSuccess = createAction( '[Staffs] Add Staffs Success');

export const addStaffsFailure = createAction(
    '[Staffs] Add Staffs Failure',
    props<{ error: any[] }>()
);
