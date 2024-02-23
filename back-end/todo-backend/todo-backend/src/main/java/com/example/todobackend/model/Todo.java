package com.example.todobackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String todoName;
    private boolean completed;
    private Date todoDate;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTodoName() {
        return todoName;
    }
    public void setTodoName(String todoName) {
        this.todoName = todoName;
    }
    public boolean isCompleted() {
        return completed;
    }
    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
    public Date getTodoDate() {
        return todoDate;
    }
    public void setTodoDate(Date todoDate) {
        this.todoDate = todoDate;
    }
    @Override
    public String toString() {
        return "Todo [id=" + id + ", todoName=" + todoName + ", completed=" + completed + ", todoDate=" + todoDate
                + "]";
    }
    
    
    
}
