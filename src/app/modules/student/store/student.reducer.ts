// student.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as fromStudentActions from './student.actions';
import { decrement, increment, reset } from './student.actions';

export interface StudentState {
  studentCount: number,
  students: any[]
}

const initialState: StudentState = {
  studentCount: 0,
  students: []
};


export const studentReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    studentCount: state.studentCount + 1
  })),
  on(decrement, (state) => ({
    ...state,
    studentCount: state.studentCount - 1
  })),
  on(reset, (state) => ({
    ...state,
    studentCount: 0
  })),
);
