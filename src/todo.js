import React from 'react'
import { ACTIONS } from './App'
import './todo.css'

export default function  todo({todo , dispatch}){
    return(
        <div className="todo">
          <span className =" task " style ={ { opacity : todo.completed ? 0.4 : 1 }}>
                {todo.task}
          </span>
          <div class="buttons">
    
                <button className="done"  onClick ={() =>  { dispatch( { type : ACTIONS.TOGGLE_TODO , payload: { id : todo.id} })}}>
                    { todo.completed ?<p>Unmark</p> : <p>Mark Done</p>}
                </button>
        
                <button className="delete" onClick = {() => {dispatch( { type: ACTIONS.DELETE_TODO  , payload : { id : todo.id }} )}}>
                { todo.completed ?<p>Delete</p> : <p>Delete</p>}
                </button>
            </div>

            
            
        </div>
    )
}

