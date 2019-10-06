import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const UPDATE_TEXT_TODO = '[TODO] Update Text Todo';
export const DELETE_TODO = '[TODO] Delete Todo';
export const TOGGLE_ALL_TODOS = '[TODO] Toggle All Todos';
export const DELETE_COMPLETE_TODOS = '[TODO] Delete Complete Todos';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {}
}

export class UpdateTextTodoAction implements Action {
    readonly type = UPDATE_TEXT_TODO;

    constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor(public id: number) {}
}

export class ToggleAllTodosAction implements Action {
    readonly type = TOGGLE_ALL_TODOS;

    constructor(public complete: boolean) {}
}

export class DeleteAllCompleteTodosAction implements Action {
    readonly type = DELETE_COMPLETE_TODOS;

    constructor() {}
}

export type AllowedActions = AddTodoAction |
                             ToggleTodoAction |
                             UpdateTextTodoAction |
                             DeleteTodoAction |
                             ToggleAllTodosAction |
                             DeleteAllCompleteTodosAction;
