package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Todo;


public interface ITodoService {

	List<Todo> getTodos();
	void addTodo (Todo todo);
	void updateTodo (Todo todo);
	void deleteTodo (int id);
	
}
