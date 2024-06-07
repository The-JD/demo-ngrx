import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Students] Increment');
export const decrement = createAction('[Students] Decrement');
export const reset = createAction('[Students] Reset');

export const loadStudents = createAction('[Students] Load Students');

export const addStudent = createAction('[Student] Add Student', props<{ name: string }>());

export const loadStudentsSuccess = createAction(
  '[Students] Load Students Success',
  props<{ students: any[] }>()
);

export const loadStudentsFailure = createAction(
  '[Students] Load Students Failure',
  props<{ error: any }>()
);

export const addStudentsSuccess = createAction( '[Students] Add Students Success');

export const addStudentsFailure = createAction(
    '[Students] Add Students Failure',
    props<{ error: any[] }>()
);

