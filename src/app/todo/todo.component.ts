import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import * as fromTodo from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  complete = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

  }

  markAllAsComplete() {
    this.complete = !this.complete;
    const toggleAllTodosAction = new fromTodo.ToggleAllTodosAction(this.complete);
    this.store.dispatch(toggleAllTodosAction);
  }

}
