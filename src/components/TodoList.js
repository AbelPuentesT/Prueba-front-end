import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos,setTodos] =useState([]);
    
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
    
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos);        
      };

      const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isCompleted =!todo.isCompleted
            }
            return todo
        })
      }

    return (
        <div>
            <h1>To Do activities</h1>
            <TodoForm onSubmit={addTodo}/>            
            {<Todo todos={todos} completeTodo={completeTodo} />}
        </div>
    )
}

export default TodoList
