import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StaffState } from './staffs.reducer';
import { AppState } from '../../../store/reducers';

export const selectStaffsState = createFeatureSelector<AppState, StaffState>('staffsList');

export const selectStaffs = createSelector(
  selectStaffsState,
  (state: StaffState) => state.staffs
);

export const selectStaffsCount = createSelector(
  selectStaffsState,
  (state: StaffState) => state.staffsCount
);