// staffs.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as fromStudentActions from './staffs.actions';
import { decrement, increment, reset } from './staffs.actions';

export interface StaffState {
  staffsCount: number,
  staffs: any[]
}

const initialState: StaffState = {
  staffsCount: 0,
  staffs: []
};

export const staffReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    staffsCount: state.staffsCount + 1
  })),
  on(decrement, (state) => ({
    ...state,
    staffsCount: state.staffsCount - 1
  })),
  on(reset, (state) => ({
    ...state,
    staffsCount: 0
  })),
);