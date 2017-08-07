import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//This is what is in Input, i was going to try changing it to make it work


// class Todo extends React.Component {
// 	  constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({todo: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
// 		// event.preventDefault();
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
		this.setState({value: event.target.value});

  }

  handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
			console.log(event)	
		event.preventDefault();
  }

  render() {
    return (
			<div>
				<div>Manage My Items</div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
    );
  }
}


//This was trying to put todo and Input together but It's not yet ready so I renamed to have a working prototype

// class App extends React.Component {
// 	constructor(props) {
//     super(props);
//     this.state = {arr: []};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
// 		console.log(event)
//     // var newArray = this.state.arr.slice();    
//     // newArray.push(event);   
//     // this.setState({arr:newArray})
// 	}
	
	

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
// 		// event.preventDefault();
// 	}
	
//   render() {
//     return (
// 			<div>
// 				<Input onChange={this.props.input} />
// 				<Todo todo={this.state.todo} />
// 			</div>
//     );
//   }	
// }



// class App extends Component {
// 	state = {
// 		clicks: 0,
// 		items: {	}
// 	}

// 	addItem = (e) => {
// 		e.preventDefault()
// 		console.log(this.todo)
// 		this.setState({
// 			clicks: this.state.clicks + 1
// 		})
// 	}

// 	render() {
// 		return (
//       <div>
//         <div>Manage My Items</div>
// 				<input type="input" name="todo"/>
// 				<input type="submit" onClick={this.addItem}/>
//         <div>My Items (0)</div>
// 				<div>{this.state.clicks}</div>
//       </div>
// 		);
// 	}
// };


export default App;
