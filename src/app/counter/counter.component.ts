import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
// store
import {Store} from '@ngrx/store';
// actions
import {Add, Decrement, Increment, Subtract} from '../store/actions/counter-actions';
// state slice of the counter
import {CounterState} from '../store/reducers/counter-reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  value: number;

  constructor(private store: Store<CounterState>) { }

  ngOnInit() {
    this.subscription = this.store.select('counter').subscribe(val => this.value = val.counter);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  increment = () => {
    this.store.dispatch(new Increment());
  }

  decrement = () => {
    this.store.dispatch(new Decrement());
  }

  add = () => {
    this.store.dispatch(new Add(5));
  }

  subtract = () => {
    this.store.dispatch(new Subtract(5));
  }
}
