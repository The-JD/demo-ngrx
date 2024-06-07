import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from './student.reducer';
import { AppState } from '../../../store/reducers';

export const selectStudentsState = createFeatureSelector<AppState, StudentState>('studentsList');

export const selectStudents = createSelector(
  selectStudentsState,
  (state) => state.students
);

export const selectStudentsCount = createSelector(
  selectStudentsState,
  (state) => state.studentCount
);