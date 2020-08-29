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

    // Run once when the app start 
    useEffect(() => {
      getLocalTodos();
    }, []);

    // Use effect

    useEffect(() =>{
      filterHandler();
      saveLocalTodos();
    },[todos , status]);

    // save local storage 

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      }else{
        let localTodo =  JSON.parse(localStorage.getItem('todos',));
        setTodos(localTodo);
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
