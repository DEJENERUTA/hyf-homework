import React, { Component } from 'react'



export default class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_text: "",
            todo_id: ""
        }
    }
	render () {

		const { addRandomTodo, timer } = this.props

           return (

			<div className="list-group m-5 ">

				<h2 className="h5">Hello there {timer} Hi again </h2>
            	<button onClick={() => addRandomTodo()}>Add Todo</button>

			</div>
       );
     }

  }
  
