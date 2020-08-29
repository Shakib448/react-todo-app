import React from 'react'

const Todo = ({inputText}) => {
    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">{inputText}</ul>
            </div>
        </>
    )
}

export default Todo;
