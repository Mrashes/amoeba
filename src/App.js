import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './reset.css';
import firebase from './firebase.js'

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentItem: '',
			items: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  
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

	removeItem = (itemId) => {
	  const itemRef = firebase.database().ref(`/items/${itemId}`);
	  itemRef.remove();
	}


	componentDidMount = () => {
	  const itemsRef = firebase.database().ref('items');
	  itemsRef.on('value', (snapshot) => {
	    let items = snapshot.val();
	    let newState = [];
	    for (let item in items) {
	      newState.push({
	        id: item,
	        title: items[item].title,
	      });
	    }
	    this.setState({
	      items: newState
	    });
	  });
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
					{/* <section className='add-item'>
							<form onSubmit={this.handleSubmit}>
								<input type="text" name="currentItem" placeholder="What do you want to do?" onChange={this.handleChange} value={this.state.currentItem} />
								<button>Add Item</button>
							</form>
					</section> */}
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
											<p>{item.title}</p>
											<button onClick={() => this.removeItem(item.id)}>X</button>
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
