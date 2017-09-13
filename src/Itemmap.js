import React, { Component } from 'react';

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

export default Itemmap;