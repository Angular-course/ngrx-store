import {Action} from '@ngrx/store';
import {ADD, DECREMENT, INCREMENT, SUBTRACT} from '../action-types';

export class Increment implements Action {
    readonly type = INCREMENT;
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class Add implements Action {
    readonly type = ADD;
    constructor(public value: number) {}
}

export class Subtract implements Action {
    readonly type = SUBTRACT;
    constructor(public value: number) {}
}

// actions union
export type counterActions = Increment | Decrement | Add | Subtract;
