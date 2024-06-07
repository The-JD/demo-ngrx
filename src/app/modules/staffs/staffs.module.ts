import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffsComponent } from './components/staffs.component';
import { StoreModule } from '@ngrx/store';
import { staffReducer } from './store/staffs.reducer';
import { StaffEffects } from './store/staffs.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [StaffsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([StaffEffects])
  ],
  exports: [StaffsComponent]
})
export class StaffsModule {}