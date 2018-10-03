package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Todo;

@Service
public class TodoMockService implements ITodoService{

	private List<Todo> todos;

	
	public TodoMockService( ){
		
		todos = new ArrayList<Todo>();
		
		 todos.add(new Todo( "Setting Up The Angular5 front-end Project"));
		 todos.add(new Todo( "Setting Up The Spring boot back-end Project"));
		 todos.add(new Todo("Implementing the Add Task feature"));	 
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
	public void deleteTodo(Long id) {
	Todo todo =new Todo();
	todo.setId(id);
	todos.remove(todo);	
		
	}

	@Override
	public void saveAll(Iterable<Todo> iterable) {
		// TODO Auto-generated method stub
		
	}

}
