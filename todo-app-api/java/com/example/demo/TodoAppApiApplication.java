package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;

@SpringBootApplication
public class TodoAppApiApplication {

	public static void main(String[] args) {
		//Application context pour créer le repo avec la classe et l'enregistrer
		
		ConfigurableApplicationContext ctx =SpringApplication.run(TodoAppApiApplication.class, args);
		
		TodoRepository todoRepo = ctx.getBean(TodoRepository.class);
	
		todoRepo.save(new Todo( "Setting Up The Angular5 front-end Project"));
		todoRepo.save(new Todo( "Setting Up The Spring boot back-end Project"));
		todoRepo.save(new Todo("Implementing the Add Task feature"));	
	}
}
