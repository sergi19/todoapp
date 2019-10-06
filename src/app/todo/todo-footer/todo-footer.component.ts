import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model.';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['All', 'Complete', 'Pending'];
  actualFilter: fromFilter.validFilters;
  pendingsTodos: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.actualFilter = state.filter;
      this.countPendingTodos(state.todos);
    });
  }

  changeFilter(newFilter: fromFilter.validFilters) {
    const setFilterAction = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(setFilterAction);
  }

  countPendingTodos(todos: Todo[]) {
    this.pendingsTodos = todos.filter(filter => !filter.complete).length;
  }

  deleteCompletedTodos() {
    const deleteCompletedTodosAction = new fromTodo.DeleteAllCompleteTodosAction();
    this.store.dispatch(deleteCompletedTodosAction);
  }

}
