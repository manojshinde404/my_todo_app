Introduction
A Todo application built with Java Spring Boot for the backend and React.js with Vite for the frontend. This application helps you manage your tasks efficiently and stay organized.

Backend Setup
  Prerequisites
    IntelliJ IDEA or your preferred IDE
    MySQL Database
    Java 17 or higher

  Steps
    1. Clone the Repository:
      git clone https://github.com/manojshinde404/my_todo_app.git
      
    2. Open Backend in IntelliJ IDEA:
      a. Unzip the downloaded backend part.
      b. Open the backend project in IntelliJ IDEA.
      
    3. Configure Database Connection:
      a. Open src/main/resources/application.properties.
      b. Update the database connection details:
        spring.datasource.url=jdbc:mysql://localhost:3306/todoapp
        spring.datasource.username=root
        spring.datasource.password=Test@1234
        spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
        spring.jpa.hibernate.ddl-auto=update

    4. Run the Application:
      Run your Spring Boot application.

Frontend Setup
  Prerequisites
    Node.js installed
    Vite installed globally

  Steps
    1. Navigate to Frontend:
      cd todo-app/frontend
      
    2. Install Dependencies:
      npm install
      
    3. Run the Application:
      npm run dev

[![Java](https://img.shields.io/badge/Java-17-red)](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7.1-green)](https://spring.io/projects/spring-boot)
[![React.js](https://img.shields.io/badge/React.js-17.0.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-2.7.1-orange)](https://vitejs.dev/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)](https://www.mysql.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-blueviolet)](https://getbootstrap.com/)

    
