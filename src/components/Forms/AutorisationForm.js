import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class AutoForm extends Component {
  static onEnter() {
  console.log("111");
  }

  constructor(props) {
      super(props);
  }

  handleSubmit = event => {
    event.preventDefault();
      var body = {
         login: ReactDOM.findDOMNode(this.refs.login).value,
         password: ReactDOM.findDOMNode(this.refs.password).value
      }

      axios({
        method: 'post',
        url: '/login',
        data: body
      })
      .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
      });
  }

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
  		</div>	
    );
  }
}

export default AutoForm;
