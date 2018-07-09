import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component{
  render() {
    return (
        <div className='container'>
          <ul>
            <li><Link to='/signup'>signup</Link></li>
            <li><Link to='/signin'>signin</Link></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
}

export default App;
