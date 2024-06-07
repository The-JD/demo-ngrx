import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { reducers } from './store/reducers';
import { StudentModule } from './modules/student/student.module';
import { StaffsModule } from './modules/staffs/staffs.module';
import { StudentComponent } from './modules/student/components/student.component';
import { StaffsComponent } from './modules/staffs/components/staffs.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserModule,
    StudentModule,
    StaffsModule,
    EffectsModule.forRoot([]),
    // StoreModule.forRoot({ count: counterReducer }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
    }),
  ],
  declarations: [AppComponent, CounterComponent, DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/