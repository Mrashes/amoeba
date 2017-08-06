import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentItem: '',
			username: '',
			items: []
		}
	}
  
  handleChange(e) {

  }

  handleSubmit(e) {

	}

	removeItem(itemId) {

	}


	componentDidMount() {

	}

	
	render() {
		return (
      <div>
        <div>Manage My Items</div>
        <form>
          <input type="input"/>
          <input type="submit"/>
        </form>
        <div>My Items (0)</div>
      </div>
      

		);
	}
}

export default App;
