import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
// store
import {Store} from '@ngrx/store';
// actions
import {Add, Decrement, Increment, Subtract} from '../store/actions/counter-actions';
// state slice of the counter
import {AppState} from '../store/app-reducer';
import {ResultsArray} from '../store/reducers/result-reducer';
import {DeleteResult, StoreResult} from '../store/actions/result-actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
  counterSubscription: Subscription;
  resultsSubscription: Subscription;
  value: number;
  results: ResultsArray;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.counterSubscription = this.store.select('counter').subscribe(val => this.value = val.counter);
    this.resultsSubscription = this.store.select('results').subscribe(val => this.results = val.results);
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
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

  onStoreResult = () => {
    this.store.dispatch(new StoreResult(this.value));
  }

  onDeleteResult = (id: Date) => {
    this.store.dispatch(new DeleteResult(id));
  }
}
