import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model.';
import { validFilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todosList: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filterTodos(state.todos, state.filter);
    });
  }

  filterTodos(todos: Todo[], filter: validFilters) {
    switch (filter) {
      case 'Pending':
        this.todosList = todos.filter(todo => !todo.complete);
        break;
      case 'Complete':
        this.todosList = todos.filter(todo => todo.complete);
        break;
      default:
        this.todosList = todos;
        break;
    }
  }

}
