import {resultActions} from '../actions/result-actions';
import {DELETE_RESULT, STORE_RESULT} from '../action-types';
import {updateObject} from '../utility';

// this interface defines the structure of a single array entry in the results array
interface Results {
    id: Date;
    value: number;
}
// this interface creates array of the Results interface
export interface ResultsArray extends Array<Results> {}
// state definition
export interface ResultsState {
    results: ResultsArray;
}
const initialState: ResultsState = {
    results: []
};

export function resultsReducer(state: ResultsState = initialState, action: resultActions) {
    switch (action.type) {
        case STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case DELETE_RESULT:
            return updateObject(state, {results: state.results.filter((el) => el.id !== action.id)});
        default:
            return state;
    }
}
