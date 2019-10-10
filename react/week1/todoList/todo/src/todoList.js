import React from 'react'
import './App.css'

export default function TodoList(props) {

    console.log('hey this is props ok',props)

    return (
    <div className='todo'>

         <ul>
           {props.value.map((item,index)=>{
             return(
             <li key={index}>{item.description} <span>{item.deadline}</span></li>
             )
         })
        }
        </ul>
        
            
    </div>
    )
}

export default TodoList;
