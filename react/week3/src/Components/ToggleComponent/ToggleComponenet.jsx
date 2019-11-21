import React, { Component } from 'react'

export default class ToggleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 2
    }
    //this.onClick = this.onClick.bind(this)
  };
  updateValue = (event) => {
    this.setState({
      value: parseInt(event.target.value, 10) || 0
    })
  }
  Increment = () => {
    console.log('Increment');
    this.setState({
      count: this.state.count + this.state.value
    })
  }
  Decrement = () => {
    console.log('Decrement');
    this.setState({
      count: this.state.count - this.state.value
    })
    console.log('decrement count', this.state.count);
  }
  reset = () => {
    this.setState({
      count: 0,
      value: 0
    })
  }
  render() {
    const { count, value } = this.state
    return (
      <div className="Counter-App">
        <div className="counter-count"><h3>{count}</h3></div>
        <div> <input type="number" value={value} onChange={this.updateValue} /></div>
        <div>
          <button onClick={this.Increment}>Add</button>
          <button onClick={this.Decrement}>Subtract</button>
        </div>
       </div >
    );
  }
}