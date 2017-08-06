import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var App = React.createClass({
	getInitialState : function() {
		return {
			clicks: 0
		}
	},

	addItem : function(e) {
		e.preventDefault()
		this.setState({
			clicks: this.state.clicks + 1
		})
	},

	render() {
		return (
      <div>
        <div>Manage My Items</div>
        <form>
          <input type="input"/>
          <input type="submit" onClick={this.addItem}/>
        </form>
        <div>My Items (0)</div>
				<div>{this.state.clicks}</div>
      </div>
		);
	}
})


export default App;
