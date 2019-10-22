import React, { Component } from 'react';
import './App.css';
import AddTodo from './Components/addTodo';

import Todolist from './Components/todolist';

import todoItem from './Components/todoItems';

class App extends Component {
  state = {
      todoItem: todoItem,
      timer: 0,
      todos: [],
  }

componentDidMount () {
  const intervalId = setInterval(() =>
    this.setState((prevState) => ({
        timer: prevState.timer + 1
    })),
    1000
  );

  this.setState({
    intervalId: intervalId
  })
}
componentWillUnmount () {
  clearInterval(this.state.intervalId)
}
deleteTodo = id => {
     const filteredItems = this.state.todos.filter(item => item.id !==id)
     this.setState({
        todos: filteredItems
     })
}
onChangeHandler = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo=> {
             if(todo.id ===id) {
               return {
                 ...todo,
                 done: !todo.done,
               };
             }
             return todo
      })
      return {
        todos: updatedTodos
      }
    })
}


addRandomTodo = () => {

  let newTodoId = Math.floor(Math.random() * 10000)

  const newTodo = {

    id: newTodoId,

    description: 'Random Todo',

    done: false

  }

  const updatedTodos = [ ...this.state.todos, newTodo ]

  this.setState({

    todos: updatedTodos

  })

}



render () {

  const { todos } = this.state

  console.log(todos)



  return (

    <div className="container App">

      <div className="row">

        <div className="col-10 mx-auto col-md-8 mt-4">

          <h2 className="text-capitalize text-center">TODO APP</h2>

          <AddTodo addRandomTodo={this.addRandomTodo} timer={this.state.timer} />

          <Todolist todolist={todos} deleteTodo={this.deleteTodo} onChangeHandler={this.onChangeHandler} />

        </div>

      </div>

    </div>

  );

}
}


export default App;
