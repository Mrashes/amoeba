import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './reset.css';

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
						<div className='wrapper'>
							<h1>Manage My Items</h1>
						</div>
						<section className='add-item'>
							<form onSubmit={this.handleSubmit}>
									<input type="text" name="currentItem" placeholder="What do you want to do?" onChange={this.handleChange} value={this.state.currentItem} />
									<button>Add Item</button>
							</form>
						</section>
				</header>
				<div className='container'>
					<div className='total'>
						<p>My Items ({this.state.items.length})</p>
					</div>
					<section className='display-item'>
						<div className='wrapper'>
							<ul>
							</ul>
						</div>
					</section>
					<section className='display-item'>
					  <div className="wrapper">
					    <ul>
					      {this.state.items.map((item) => {
					        return (
										<li key={item.id}>
											<span className="title">{item.title}</span>
											<button onClick={() => this.removeItem(item)} className="xButton">X</button>
										</li>
					        )
					      })}
					    </ul>
					  </div>
					</section>
				</div>
			</div>
		);
	}
}

export default App;
