import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Todo from './Components/TodoList/TodoList';

function App() {
  const [inputText, setInputText] = useState('');

  const [todos , setTodos] = useState([]);
  
    return (
        <div>
            <header>
                <h1>Ed's Todo List </h1>
            </header>
            <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} />
            <Todo todos={todos} />
        </div>
    );
}

export default App;
