import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './header'
import List from './list'
import Input from './input'
import './App.css';
// import './reset.css';

function Store(initialState = {}) {
	this.state = initialState;
}
Store.prototype.mergeState = function(partialState) {
	Object.assign(this.state, partialState);
};

var myStore = new Store();

class App extends Component {
	state = {
			currentItem: '',
			items: []
		}
  
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  // handleSubmit = (e) => {
	//   e.preventDefault();
	//   const item = {
	//     title: this.state.currentItem,
	//   }
	//   this.state.items.push(item);
	//   this.setState({
	//     currentItem: ''
	//   });
	// }

	removeItem = (item) => {
		let array = this.state.items;
		let index = array.indexOf(item)
		array.splice(index, 1);
		this.setState({items: array });
	}
	

	render() {
		return (
			<div className='app'>
					<Header mergeState={myStore.mergeState.bind(myStore)}/>
					<Input mergeState={myStore.mergeState.bind(myStore)}/>
					<List mergeState={myStore.mergeState.bind(myStore)}/>
			</div>
		);
	}
}

export default App;
