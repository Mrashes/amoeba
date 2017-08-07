import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import ItemCreate from './ItemCreate.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
		this.setState({value: event.target.value});

  }

  handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.value);
			
    event.preventDefault();
  }

  render() {
    return (
			<div>
        <ItemCreate/>
        <Todo/> 

          {/* Legacy code from fun freinds food to try understadning how to map? 
        {this.state.items.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>brought by: {item.user}</p>
              <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
            </li>
          )
        })}         */}
			</div>
    );
  }
}



export default App;
