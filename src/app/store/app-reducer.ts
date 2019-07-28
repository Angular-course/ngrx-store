import {counterReducer, CounterState} from './reducers/counter-reducer';
import {resultsReducer, ResultsState} from './reducers/result-reducer';
import {ActionReducerMap} from '@ngrx/store';

// definition of the app state which you need it to select data from the store in the required component
export interface AppState {
    counter: CounterState;
    results: ResultsState;
}

// merge all reducers into one reducer => equivalent to combineReducers in react-redux
export const appReducer: ActionReducerMap<AppState> = {
    counter: counterReducer,
    results: resultsReducer,
};
