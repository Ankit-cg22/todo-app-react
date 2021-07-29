import React , {useState, useReducer} from 'react'
import './App.css'
import LIlogo  from './image/LIlogo.png'
import ghLogo  from './image/ghLogo.png'

import Todo from './todo'

export const ACTIONS ={
  NEW_TODO : "newTodo",
  TOGGLE_TODO : "toggleTodo",
  DELETE_TODO : "deleteTodo"
}

function reducer(todos , action){
    switch( action.type )
    {
      case ACTIONS.NEW_TODO:
        return [ ...todos , newTodo(action.payload.task)]

      case ACTIONS.TOGGLE_TODO:
        // toggle the 'completed' property of the desired task
        return todos.map( todo =>{
          if( todo.id === action.payload.id ) {
            return { ...todo , completed : !todo.completed}
          }
          return todo
        })

      case ACTIONS.DELETE_TODO:
        return todos.filter( todo => todo.id  !== action.payload.id)
        // allow that 'todo' whose id != action.payload.id
        // task on whose delete button we clicked has id = action.payload.id
        // so it is not allowed( i.e deleted)

      default : return todos
    }
}

function newTodo( task )
{
  return { id: Date.now() , task : task , completed : false}
}

function App(){

  // reducer for the array of todos
  const [todos , dispatch]= useReducer( reducer , []);
  const [task , setTask] = useState('')


  function handleSubmit(e){
    e.preventDefault();
    dispatch({ type : ACTIONS.NEW_TODO , payload : { task : task }});
    setTask('');
  }

  console.log(todos)

  return(
    <div className="app">
      <h1>Todo App</h1>

      {/* form (input) */}
      <form onSubmit={handleSubmit}>
        <input className="submit-input" type="text" value={task} 
        onChange = {e => setTask(e.target.value ) }
        placeholder="Enter task.." />
        <button className="submit-btn" type="submit">Add</button>
      </form>

      <div className="todos">
        
        <h2>Todos :</h2>
        {todos.map( todo => {
          return <Todo key={todo.id} todo={todo} dispatch = {dispatch} />
        })}
      </div>

      <div className="credit">
          <p>
            Coded by : Ankit Das
          </p>
          <a href="https://www.linkedin.com/in/ankit-das-a7a328202/"> 
            <img src={LIlogo} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-das-a7a328202/"> 
            <img src={ghLogo} alt="" />
          </a>
      </div>

    </div>
  )
}

export default App;




