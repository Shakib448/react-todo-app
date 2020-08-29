import React from 'react';
import Todo from '../Todo/Todo';


const TodoList = ({todos, setTodos, filterTodos }) => {

    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                {
                    filterTodos.map((todo) => <Todo todos={todos} setTodos={setTodos} todo={todo} text={todo.text} key={todo.id}/>).slice(0, 10) // For limit
                }
                </ul>
            </div>
        </>
    )
}

export default TodoList;
