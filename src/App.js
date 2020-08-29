import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Todo from './Components/TodoList/TodoList';

function App() {
    const [inputText,
        setInputText] = useState('');

    const [todos,
        setTodos] = useState([]);

    const [status,
        setStatus] = useState("all");

    const [filterTodos,
        setFilterTodos] = useState([]);


        
    useEffect(() =>{
      filterHandler();
    },[todos , status]);

    const filterHandler = () =>{
      switch(status){
        case 'completed':
          setFilterTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    }    


    return (
        <div>
            <header>
                <h1>Your Todo List {filterTodos.length}
                </h1>
            </header>
            <Form
                setInputText={setInputText}
                inputText={inputText}
                setTodos={setTodos}
                todos={todos}
                setStatus={setStatus}
                />

                
            <Todo todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
        </div>
    );
}

export default App;
