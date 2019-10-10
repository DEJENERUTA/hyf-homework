import React, { Component } from 'react'
import TodoList from './todoList'

export default class App extends Component {

  state={
    todos : [
      { description: "Get out of bed", deadline: "Wed Sep 13 2017"},
      { description: "Brush teeth", deadline: "Thu Sep 14 2017"},
      { description: "Eat breakfast", deadline: "Friday sep 15 2017"}
    ],
  }

  
  render() {
    console.log(this.state.todos)
    return (
      <div>
         THIS IS APP AND MAIN COMPNENT
         <TodoList value={this.state.todos}/>

      </div>
    )
  }
}


