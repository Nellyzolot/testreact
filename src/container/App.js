import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component{
  render() {
    return (
        <div className='container'>
          <Link to='/categories'>Categories</Link>
          {this.props.children}
        </div>
    );
  }
}


export default App;
