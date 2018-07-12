import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class RegForm extends Component {

  constructor(props) {
      super(props);
  }

  handleSubmit = event => {
      event.preventDefault();
      this.disableInput();

      axios.post('/signup', {
        login: ReactDOM.findDOMNode(this.refs.login).value,
        password: ReactDOM.findDOMNode(this.refs.password).value
      })
  }

  disableInput(){
    ReactDOM.findDOMNode(this.refs.login).disabled = true;
    ReactDOM.findDOMNode(this.refs.password).disabled = true;
  }

  render() {
    return (
    	<div className = 'registration-form'>
    		<form onSubmit={this.handleSubmit}>
          <div className='textfield'>
            <input
                name='login'
                type='text'
                defaultValue=''
                ref='login'
                placeholder='Введите логин'
            />
          </div>
          <div className='textfield'>
    			  <input
                name='password'
                type='password'
                defaultValue=''
                ref='password'
                placeholder='Введите пароль'
            />
          </div>
          <button className='signup-button button' onClick={this.handleSubmit} >Зарегистрироваться</button>
    		</form>
  		</div>
    );
  }
}

export default RegForm;
