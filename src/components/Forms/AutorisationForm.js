import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import axios from 'axios';
import Products from '../Products/Products'


class AutoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sid: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post('/login', {
      login: ReactDOM.findDOMNode(this.refs.login).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    })
    .then(response => {
        this.setState({sid: response.data.sid});
      }
    )

    //browserHistory.push('/products')
  };

  handleClick = event => {
    console.log(this.state.sid);
    axios.get('/categories')
        .then(response => console.log(response))
  };

  render() {
    return (
    	<div className = "autorisation-form">
    		<form onSubmit={this.handleSubmit}>
          <div className="textfield">
            <input
                name="login"
                type="text"
                defaultValue=''
                ref='login'
                placeholder="Введите логин"
            />
          </div>
          <div className="textfield">
            <input
                name="password"
                type="password"
                defaultValue=''
                ref='password'
                placeholder="Введите пароль"
            />
          </div>
          <button className="login-button button" onClick={this.handleSubmit} >Войти</button>
    		</form>
        <p>{this.state.sid}</p>
        <button className="login-button button" onClick={this.handleClick}>
        </button>
  		</div>	
    );
  }
}

export default AutoForm;
