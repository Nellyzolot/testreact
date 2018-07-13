import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class LoginForm extends Component {
  static propTypes = {
    sid: PropTypes.number.isRequired,
    setSid: PropTypes.func.isRequired,
  }

  handleSubmit = event => {
    const { setSid } = this.props;
    event.preventDefault();

    axios.post('/login', {
      login: ReactDOM.findDOMNode(this.refs.login).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    })
    .then(response => {
        setSid({sid: response.data.sid})
      }
    )

  };

  render() {
    return (
    	<div className = "autorisation-form">
    		<form onSubmit={this.handleSubmit.bind(this)}>
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
export default LoginForm;
