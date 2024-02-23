package com.example.todobackend.service;

import com.example.todobackend.model.Todo;
import com.example.todobackend.repository.TodoRepository;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Table(name = "todos")
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(Long id){
        return todoRepository.findById(id);
    }

    public Todo saveTodo(Todo todo){
        return todoRepository.save(todo);
    }

    public void deleteTodo(Long id){
        todoRepository.deleteById(id);
    }

    public Todo updateCompleteStatus(Long id, Boolean completed){
        Optional<Todo> existingTodoOptional = getTodoById(id);
        if(existingTodoOptional.isPresent()){
            Todo existingTodo = existingTodoOptional.get();
            existingTodo.setCompleted(completed);
            return saveTodo(existingTodo);
        }
        return null;
    }
}
