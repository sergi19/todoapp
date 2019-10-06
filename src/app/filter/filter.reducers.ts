import * as fromFilter from './filter.actions';

const initialState: fromFilter.validFilters = 'All';

export function filterReducer(state = initialState, action: fromFilter.AllowedActions) {
    switch (action.type) {
        case fromFilter.SET_FILTER:
            return action.filter;

        default:
            return state;
    }
}
