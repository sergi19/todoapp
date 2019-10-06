import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set Filter';
export type validFilters = 'All' | 'Complete' | 'Pending';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor(public filter: validFilters) {}
}

export type AllowedActions = SetFilterAction;
