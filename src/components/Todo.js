import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {FiEdit3} from 'react-icons/fi'
import {AiOutlineCloseCircle} from 'react-icons/ai'


function Todo({todos, completeTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        value:""
    })

    return todos.map((todo, index) => (
        <div className={todo.isCompleted ? "todo-row complete" : "todo-row"}
        key={index}
        >
            <div key={todo.id} onClick={() =>completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <AiOutlineCloseCircle />
                <FiEdit3 />

            </div>
        </div>
    ))
}

export default Todo
