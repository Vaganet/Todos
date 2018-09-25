import { Component, OnInit } from '@angular/core';
import {TodoMockService} from '../todo.mock.service';
import {Todo} from '../shared/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 // exporter une class pour qu'elle puisse être utilisée dans les autres fichiers
  todos: Todo[];
  
      constructor (private todoService: TodoMockService){  }
  
  ngOnInit() {
      this.todos=this.todoService.getTODOS();
  }
  }


