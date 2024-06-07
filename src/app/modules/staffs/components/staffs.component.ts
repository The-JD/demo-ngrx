import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { increment, decrement, reset } from '../store/staffs.actions';
import { selectStaffs, selectStaffsCount } from '../store/staffs.selectors';

@Component({
  selector: 'app-staffs',
  styleUrls: ['./staffs.component.css'],
  template: `
    <h3>Staff</h3>
    <div>Current Count: {{ count$ | async }}</div>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `
})
export class StaffsComponent {
  
  count$ = this.store.select(selectStaffsCount);

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
