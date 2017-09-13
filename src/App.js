import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Header from './header'
import AddTodo from './input'
import Itemmap from './Itemmap'
import Myitems from './Myitems'



class App extends Component {
	state = {
			currentItem: '',
			items: []
		}
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
	  e.preventDefault();
	  const item = {
	    title: this.state.currentItem,
	  }
	  this.state.items.push(item);
	  this.setState({
	    currentItem: ''
	  });
	}

	removeItem = (item) => {
		let array = this.state.items;
		let index = array.indexOf(item)
		array.splice(index, 1);
		this.setState({items: array });
	}
	

	render() {
		return (
			<div className='app'>

				<header className='header'>
        	<Header />
          <AddTodo handleChange={this.handleChange} handleSubmit={this.handleSubmit} currentItem={this.state.currentItem}/>
				</header>
				<div className='container'>
          <Myitems items={this.state.items}/>
          <Itemmap items={this.state.items} removeItem={this.removeItem}/>
				</div>

			</div>
		);
	}
}

export default App;
