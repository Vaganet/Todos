package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Todo;

@Service
public class TodoMockService implements ITodoService{

	private List<Todo> todos;

	
	public TodoMockService( ){
		
		todos = new ArrayList<Todo>();
		
		 todos.add(new Todo(1, "Setting Up The Angular5 front-end Project", "ts & html & css & service & model"));
		 todos.add(new Todo(2, "Setting Up The Spring boot back-end Project", "Java8 et service et controler"));
		 todos.add(new Todo(3, "Implementing the Add Task feature", "ADD"));	 
	}
	
	@Override
	public List<Todo> getTodos() {
		return todos;
	}

	@Override
	public void addTodo(Todo todo) {
		todos.add(todo);
		
	}

	@Override
	public void updateTodo(Todo todo) {
		todos.remove(todo);
		todos.add(todo);
	}

	@Override
	public void deleteTodo(int id) {
	Todo todo =new Todo();
	todo.setId(id);
	todos.remove(todo);	
		
	}

}
