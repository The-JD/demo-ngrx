import { Component } from '@angular/core';
import { selectStudents, selectStudentsCount } from '../store/student.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { increment, decrement, reset } from '../store/student.actions';

@Component({
  selector: 'app-student',
  styleUrls: ['./student.component.css'],
  template: `
    <h3>Students</h3>
    <div>Current Count: {{ studentsCount$ | async }}</div>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `
})
export class StudentComponent {
  studentsCount$ = this.store.select(selectStudentsCount);
  name!: string;

  constructor(private store: Store<AppState>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
