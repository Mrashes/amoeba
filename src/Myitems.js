import React, { Component } from 'react';

class Myitems extends Component {
    render () {
      return (
        <div className='total'>
          <p>My Items ({this.props.items.length})</p>
        </div>
      )
    }
  }

export default Myitems;