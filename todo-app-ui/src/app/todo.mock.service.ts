import {Todo} from './shared/todo';
import {Injectable} from '@angular/core';


@Injectable()
export class TodoMockService {

 private TODOS:Todo[] = [];

constructor(){
    let t1: Todo = new Todo(1, 'Setting Up The Angular5 front-end Project', 'ts & html & css & service & model');
    let t2: Todo = new Todo(2, 'Setting Up The Spring boot back-end Project', 'java8 et service et controler');
    let t3: Todo = new Todo(3, 'Implementing the Add Task feature', 'CREATE');
    this.TODOS.push(t1);
    this.TODOS.push(t2);
    this.TODOS.push(t3);
}

public getTODOS() : Todo[] {
    return this.TODOS;
}
}