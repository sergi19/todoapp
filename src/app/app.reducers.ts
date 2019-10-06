import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/model/todo.model.';
import * as fromFilterActions from './filter/filter.actions';
import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducers';

export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
};
