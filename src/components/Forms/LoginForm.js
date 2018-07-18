import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends Component {
  static propTypes = {
    sid: PropTypes.number.isRequired,
    setSid: PropTypes.func.isRequired,
  };

  handleSubmit = event => {
    const {setSid} = this.props;
    event.preventDefault();
    setSid(ReactDOM.findDOMNode(this.refs.login).value, ReactDOM.findDOMNode(this.refs.password).value);
  };

  render() {
    return (
        <div className='autorisation-form'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='textfield'>
              <input
                  name='login'
                  type='text'
                  defaultValue=''
                  ref='login'
                  placeholder='Введите логин'
                  required
              />
            </div>
            <div className='textfield'>
              <input
                  name='password'
                  type='password'
                  defaultValue=''
                  ref='password'
                  placeholder='Введите пароль'
                  required
              />
            </div>
            <button className='login-button button'>Войти</button>
          </form>
        </div>
    );
  }
}

export default LoginForm;
