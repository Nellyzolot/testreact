import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as LoginAction from '../../actions/LoginAction'
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post('/login', {
      login: ReactDOM.findDOMNode(this.refs.login).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    })
    .then(response => {
        this.props.actions.setSid({sid: response.data.sid})
      }
    )

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
          <button className="login-button button" >Войти</button>
    		</form>
  		</div>	
    );
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
