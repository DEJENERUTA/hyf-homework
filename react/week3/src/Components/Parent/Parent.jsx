import React, { Component } from 'react'


export default class Parent extends Component {
    render() {
        return (
            <div className="Parent">
                <Parent text="hello child" />
                <Parent text="hello child 2"  />
                <Parent text="hello child" />
            </div>
        )
    }
}