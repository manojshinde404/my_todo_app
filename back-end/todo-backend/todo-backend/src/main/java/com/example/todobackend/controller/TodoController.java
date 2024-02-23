package com.example.todobackend.controller;

import com.example.todobackend.model.Todo;
import com.example.todobackend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<Todo> getAllTodo(){
        return todoService.getAllTodos();
    }

    @GetMapping("/{id}")
    public Optional<Todo> getTodoById(@PathVariable Long id){
        return todoService.getTodoById(id);
    }
    @PostMapping
    public Todo saveTodo(@RequestBody Todo todo){
        return todoService.saveTodo(todo);
    }
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody Todo updateTodo){
        Todo updateTodoEntity = todoService.updateCompleteStatus(id, updateTodo.isCompleted());
        if(updateTodoEntity != null){
            return ResponseEntity.ok(updateTodoEntity);
        }
        return ResponseEntity.notFound().build();
    }

}
