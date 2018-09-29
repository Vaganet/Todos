package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Todo;
import com.example.demo.service.ITodoService;


@RestController
@RequestMapping("api/todo")
@CrossOrigin
public class TodoController {
	
@Autowired
private ITodoService todoService;


@GetMapping
public List<Todo> getTodos(){
	return todoService.getTodos();
}


@PostMapping
public void addTodo(@RequestBody Todo todo){
	todoService.addTodo(todo);	
}

@PutMapping
public void updateTodo (@RequestBody Todo todo){
	todoService.updateTodo(todo);
}

@DeleteMapping("/{title}")
public void deleteTodo (@PathVariable String title){
	todoService.deleteTodo(title);
}

}
