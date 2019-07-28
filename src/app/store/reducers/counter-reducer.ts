// utilities
import {updateObject} from '../utility';
// actions
import {counterActions} from '../actions/counter-actions';
// action types
import {ADD, DECREMENT, INCREMENT, SUBTRACT} from '../action-types';

// state definition
interface State {
    counter: number;
}

// select counter state from our store
export interface CounterState {
    counter: State;
}
const initialState: State = {
    counter: 0
};
// we must use function because function calls are not supported by AOT compilation
export function counterReducer(state: State = initialState, action: counterActions) {
    switch (action.type) {
        case INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        case DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case ADD:
            return updateObject(state, {counter: state.counter + action.value});
        case SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
        default:
            return state;
    }
};
