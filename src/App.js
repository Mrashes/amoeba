import React, { Component } from 'react';
// import logo from './logo.svg';
// import HeaderTodo from './header'
// import List from './list'
// import Input from './input'
import './App.css';
import './reset.css';

// function Store(initialState = {}) {
// 	this.state = initialState;
// }
// Store.prototype.mergeState = function(partialState) {
// 	Object.assign(this.state, partialState);
// };

// var myStore = new Store();

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <div className='wrapper'>
          <h1>Manage My Items</h1>
        </div>
      </header>      
    )
  }
}

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

class Myitems extends Component {
  render () {
    return (
      <div className='total'>
        <p>My Items ({this.props.items.length})</p>
      </div>
    )
  }
}

class Itemmap extends Component {
  render () {
    return (
      <div>
        <section className='display-item'>
          <div className='wrapper'>
            <ul>
            </ul>
          </div>
        </section>
        <section className='display-item'>
          <div className="wrapper">
            <ul>
              {this.props.items.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="title">{item.title}</span>
                    <button onClick={() => this.props.removeItem(item)} className="xButton">X</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </div>

    )
  }
}



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
