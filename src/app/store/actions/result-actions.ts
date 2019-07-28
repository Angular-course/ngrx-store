import {Action} from '@ngrx/store';
import {DELETE_RESULT, STORE_RESULT} from '../action-types';

export class StoreResult implements Action {
    readonly type = STORE_RESULT;
    constructor(public result: number) {}
}

export class DeleteResult implements Action {
    readonly type = DELETE_RESULT;
    constructor(public id: Date) {}
}

export type resultActions = StoreResult | DeleteResult;
