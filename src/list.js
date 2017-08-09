import React, { Component } from 'react';


class List extends Component {
	state = {
			currentItem: '',
			items: []
		}

    removeItem = (item) => {
		let array = this.state.items;
		let index = array.indexOf(item)
		array.splice(index, 1);
		this.setState({items: array });
	}
	
	removeItem = (item) => {
		let array = this.state.items;
		let index = array.indexOf(item)
		array.splice(index, 1);
		this.setState({items: array });
	}

	render() {
		return (
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
        );
    }
}

export default List;