import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student.component';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './store/student.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([StudentEffects])
  ],
  exports: [StudentComponent]
})
export class StudentModule {}