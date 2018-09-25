import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo/todo.service';
import {Todo} from '../shared/todo';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 // exporter une class pour qu'elle puisse être utilisée dans les autres fichiers
  todos: Todo[];

  //pour gérer les formulaiare réactive
  todoForm: FormGroup;
  
      constructor (private todoService: TodoService, private fb: FormBuilder){ 
        this.todoForm = this.fb.group({
    
            id :'',
            title: ['', Validators.required],
            description : '',
              });

            }
  

  ngOnInit() {
      this.loadTodos();
  }


loadTodos(){
  /*subscribe pour l'observable*/
  this.todoService.getALL().subscribe(
    data => {this.todos= data},
     error => {console.log("An error was occured")},
     () => {console.log('loading Todo is done.')}  
  )
}

  }



