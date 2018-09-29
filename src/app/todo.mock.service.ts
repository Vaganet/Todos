import {Todo} from './shared/todo';
import {Injectable} from '@angular/core';


@Injectable()
export class TodoMockService {

 private TODOS:Todo[] = [];

constructor(){
    let t1: Todo = new Todo('Setting Up The Angular5 front-end Project');
    let t2: Todo = new Todo('Setting Up The Spring boot back-end Project');
    let t3: Todo = new Todo('Implementing the Add Task feature');
    this.TODOS.push(t1);
    this.TODOS.push(t2);
    this.TODOS.push(t3);
}

public getTODOS() : Todo[] {
    return this.TODOS;
}

/*
getUncompletedTodos(): Todo[] {
    return this.TODOS.filter(todo => !todo.completed);
  }

getCompletedTodos(): Todo[] {
    return this.TODOS.filter(todo => todo.completed);
  }
*/




  }
