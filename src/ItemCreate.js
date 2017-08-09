import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class ItemCreate extends React.Component {
	state = {
		clicks: 0,
		items: {	}
	}

	addItem = (e) => {
		e.preventDefault()
		this.setState({
			clicks: this.state.clicks + 1
		})
	}

	render() {
        return (
            <div>
                <div>Click button to make new thing to do</div>
                 <input type="input" name="todo"/> 
                <input type="submit" onClick={this.addItem}/>
                <div>My Items {this.state.clicks}</div>
                {/* <div>{this.state.clicks}</div> */}
            </div>
            );
        }
}



export default ItemCreate;