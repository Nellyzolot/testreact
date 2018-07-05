import React, { Component } from 'react';
import axios from 'axios';


class AutoForm extends Component {

constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      login:'',
      password:''
    };
}

handleSubmit = event => {
    event.preventDefault();

        var body = {
           login: this.state.login,
           password: this.state.password
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

handleLoginChange(e){
    this.setState({login:e.target.value})
}
handlePasswordChange(e){
    this.setState({password:e.target.value})
}   

  render() {
    return (
    	<div className = "autorisation-form">
    		<form onSubmit={this.handleSubmit}>
          <div className="textfield">
            <input
                name="login"
                type="text"
                onChange={this.handleLoginChange}
                placeholder="Введите логин"
            />
          </div>
          <div className="textfield">
            <input
                name="password"
                type="password"
                onChange={this.handlePasswordChange}
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
