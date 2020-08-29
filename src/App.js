import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Todo from './Components/Todo/Todo';

function App() {
  const [inputText, setInputText] = useState('');

  const [todos , setTodos] = useState([]);

  
    return (
        <div>
            <header>
                <h1>Ed's Todo List </h1>
            </header>
            <Form setInputText={setInputText}/>
            <Todo inputText={inputText} />
        </div>
    );
}

export default App;
