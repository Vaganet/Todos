import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo/todo.service';
import {Todo} from '../shared/todo';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

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

  //pour controler le contenu du card-header on l'initialise a add

  operation : string='add';

  //* lors du clic sur le bouton add on choisi le produit courant (pointeur) et l'initialiser
  
   selectedTodo: Todo;


      constructor (private todoService: TodoService, private fb: FormBuilder, private route : ActivatedRoute ){ 
        this.createForms();
            }

  createForms(){
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      //   id :'',
     //   description : '',
        });
  }

  ngOnInit() {
   this.initTodo();
   this.todos =this.route.snapshot.data.todos;
  }


loadTodos(){
  /*subscribe pour l'observable*/
  this.todoService.getTodos()
  .subscribe(data => {
    this.todos= data},
     error => {console.log("An error was occured")},
     () => {console.log('loading Todo is done.')}  
  )
}

addTodo(){
  const t =this.todoForm.value;
  this.todoService.addTodo(t)
  .subscribe(
    res =>{
    this.initTodo();
    this.loadTodos();
    }
  );
  
}
//*
updateTodo(){
  this.todoService.updateTodo({selectedTodo})
  .subscribe(
    res =>{
      this.initTodo();
      this.loadTodos();
    }
  );
  
} 

initTodo(){
/* */
this.selectedTodo = new Todo();
this.createForms();
}


deleteTodo(){
  this.todoService.deleteTodo(this.selectedTodo.title)
  .subscribe(
  res =>{
    this.selectedTodo=new Todo();
    this.loadTodos();
    },
    error => {console.log("An error of deleting was occured")},
    () => {console.log('deleting Todo is well done.')}  
  );
  
}

  }



