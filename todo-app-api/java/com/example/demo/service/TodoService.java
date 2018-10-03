package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.demo.repository.TodoRepository;
import com.example.demo.entity.Todo;

@Service
@Primary
public class TodoService  implements ITodoService {
	
	@Autowired
	private TodoRepository todoRepo;

	@Override
	public List<Todo> getTodos() {
	return	todoRepo.findAll();
	}

	@Override
	public void addTodo(Todo todo) {
		todoRepo.save(todo);
		
	}

	@Override
	public void updateTodo(Todo todo) {
		todoRepo.save(todo);
		
	}

	@Override
	public void deleteTodo(Long id) {
	Todo todo = new Todo();
	todo.setId(id);
	todoRepo.delete(todo);
		
	}

	
	@Override
	public void saveAll(Iterable<Todo> iterable) {
		todoRepo.saveAll(iterable);	
	}


	
}
