import { Todo } from './model/todo.model.';
import * as fromTodo from './todo.actions';

const todos1 = new Todo('Vencer a Thanos');
const todos2 = new Todo('Salvar al mundo');
const initialState: Todo[] = [todos1, todos2];

export function todoReducer(state = initialState, action: fromTodo.AllowedActions) {
    switch (action.type) {
        case fromTodo.ADD_TODO:
            const todos = new Todo(action.text);
            return [...state, todos];

        case fromTodo.TOGGLE_TODO:
            const newArrayToggle = state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        complete: !todoEdit.complete
                    };
                } else {
                    return todoEdit;
                }
            });
            return newArrayToggle;

        case fromTodo.UPDATE_TEXT_TODO:
            const newArrayUpdatedText = state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        text: action.text
                    };
                } else {
                    return todoEdit;
                }
            });
            return newArrayUpdatedText;

        case fromTodo.DELETE_TODO:
            const newArrayDelete = state.filter(todoEdit => todoEdit.id !== action.id);
            return newArrayDelete;

        case fromTodo.TOGGLE_ALL_TODOS:
            const newArrayToggleAll = state.map(todoEdit => {
                return {
                    ...todoEdit,
                    complete: action.complete
                };
            });
            return newArrayToggleAll;

        case fromTodo.DELETE_COMPLETE_TODOS:
            const newArrayPendingTodos = state.filter(todo => !todo.complete);
            return newArrayPendingTodos;

        default:
            return state;
    }
}
