import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { AddTodoAction } from '../todo.actions';
import { SetFilterAction, validFilters } from '../../filter/filter.actions';
import { Todo } from '../model/todo.model.';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;
  actualFilter: validFilters;
  todos: Todo[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.actualFilter = state.filter;
    });
    this.txtInput = new FormControl('', Validators.required);
  }

  addTodo() {
    if (this.txtInput.valid) {
      this.validateFilter();
      const addTodoAction = new AddTodoAction(this.txtInput.value);
      this.store.dispatch(addTodoAction);
      this.txtInput.setValue('');
    }
  }

  validateFilter() {
    const pendingTodos: number = this.todos.filter(todo => !todo.complete).length;
    let filter: validFilters = 'All';
    if (this.actualFilter === 'Pending' && pendingTodos > 0) {
      filter = 'Pending';
    }
    const setFilterAction = new SetFilterAction(filter);
    this.store.dispatch(setFilterAction);
  }

}
