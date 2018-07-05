import React, { Component } from 'react';
import axios from 'axios';

class RegForm extends Component {

constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.disableInput = this.disableInput.bind(this);
    this.state = {
      login:'',
      password:''
    };

}

handleSubmit = event => {
    event.preventDefault();
    this.disableInput();
        var body = {
           login: this.state.login,
           password: this.state.password
        }

        axios({
              method: 'post',
              url: '/signup',
              data: body
            })
            .then(function (response) {
              console.log(response);
              })
              .catch(function (error) {
                console.log(error);
            });
}

disableInput(){
  this.textInput1.disabled = true;
  this.textInput2.disabled = true;
}

handleLoginChange(e){
    this.setState({login:e.target.value})
}
handlePasswordChange(e){
    this.setState({password:e.target.value})
}   

  render() {
    return (
    	<div className = "registration-form">
    		<form onSubmit={this.handleSubmit}>
          <div className="textfield">
            <input
                name="login"
                type="text"
                ref={(input) => { this.textInput1 = input; }}
                onChange={this.handleLoginChange}
                placeholder="Введите логин"
            />
          </div>
          <div className="textfield">
    			  <input
                name="password"
                type="password"
                ref={(input) => { this.textInput2 = input; }}
                onChange={this.handlePasswordChange}
                placeholder="Введите пароль"
            />
          </div>
          <button className="signup-button button" onClick={this.handleSubmit} >Зарегистрироваться</button>
    		</form>
  		</div>
    );
  }
}

export default RegForm;
