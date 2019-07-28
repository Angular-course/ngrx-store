import {resultActions} from '../actions/result-actions';
import {DELETE_RESULT, STORE_RESULT} from '../action-types';
import {updateObject} from '../utility';

const initialState = {
    results: []
};

export const resultReducer = (state = initialState, action: resultActions) => {
    switch (action.type) {
        case STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case DELETE_RESULT:
            return updateObject(state, {results: state.results.filter((el) => el.id !== action.id)});
        default:
            return state;
    }
};
