// reducers.ts
import { ActionReducerMap } from '@ngrx/store';
import { StudentState, studentReducer } from '../modules/student/store/student.reducer';
import { StaffState, staffReducer } from '../modules/staffs/store/staffs.reducer';

export interface AppState {
  studentsList: StudentState;
  staffsList: StaffState; // Define state interfaces for each feature
}

export const reducers: ActionReducerMap<AppState> = {
  staffsList: staffReducer,
  studentsList: studentReducer
};
