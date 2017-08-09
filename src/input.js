import React, { Component } from 'react';

class Input extends Component {
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
    
	render() {
		return (
            <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                        <input type="text" name="currentItem" placeholder="What do you want to do?" onChange={this.handleChange} value={this.state.currentItem} />
                        <button>Add Item</button>
                </form>
            </section>
        );
    }
};

export default Input;