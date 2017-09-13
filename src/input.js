import React, { Component } from 'react';

class AddTodo extends Component {
    render () {
      return (
        <section className='add-item'>
            <form onSubmit={this.props.handleSubmit}>
              <input type="text" name="currentItem" placeholder="What do you want to do?" onChange={this.props.handleChange} value={this.props.currentItem} />
              <button>Add Item</button>
            </form>
        </section>
      )
    }
  }

export default AddTodo;