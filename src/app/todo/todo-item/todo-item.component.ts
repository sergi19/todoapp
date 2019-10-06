import { Component, OnInit, Input, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model.';
import { FormControl, Validators } from '@angular/forms';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputTemplate', {static: false}) txtInputTemplate: ElementRef;
  chkField: FormControl;
  txtField: FormControl;
  editing: boolean;
  enterKeyPressed: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.complete);
    this.txtField = new FormControl(this.todo.text, Validators.required);
    this.chkField.valueChanges.subscribe(() => {
      const updateCompleteAction = new fromTodo.ToggleTodoAction(this.todo.id);
      this.store.dispatch(updateCompleteAction);
    });
  }

  edit() {
    if (!this.todo.complete) {
      this.editing = true;
      setTimeout(() => {
        this.txtInputTemplate.nativeElement.select();
      }, 1);
    }
  }

  updateTextTodoEnter() {
    this.editing = false;
    this.enterKeyPressed = true;
    if (this.txtField.value !== this.todo.text && this.txtField.valid) {
      const updateTextTodoAction = new fromTodo.UpdateTextTodoAction(this.todo.id, this.txtField.value);
      this.store.dispatch(updateTextTodoAction);
    }
  }

  updateTextTodoBlur() {
    this.editing = false;
    if (this.txtField.value !== this.todo.text && this.txtField.valid && !this.enterKeyPressed) {
      const updateTextTodoAction = new fromTodo.UpdateTextTodoAction(this.todo.id, this.txtField.value);
      this.store.dispatch(updateTextTodoAction);
      this.enterKeyPressed = false;
    }
  }

  deleteTodo() {
    if (!this.todo.complete) {
      const deleteTodoAction = new fromTodo.DeleteTodoAction(this.todo.id);
      this.store.dispatch(deleteTodoAction);
    }
  }

}
