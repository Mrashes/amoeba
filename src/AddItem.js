import React, { Component } from 'react';
import firebase from './firebase.js'


class AddIt extends Component {
    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
	  e.preventDefault();
	  const itemsRef = firebase.database().ref('items');
	  const item = {
	    title: this.state.currentItem,
	  }
	  itemsRef.push(item);
	  this.setState({
	    currentItem: ''
	  });

		// itemsRef.on('value', (snapshot) => {
		//   console.log(snapshot.val());
		// });
	}

    render (
        <section className='add-item'>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="currentItem" placeholder="What do you want to do?" onChange={this.handleChange} value={this.state.currentItem} />
                <button>Add Item</button>
            </form>
        </section>
    )
}

export default 