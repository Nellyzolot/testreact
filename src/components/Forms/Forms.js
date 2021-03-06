import React, {Component} from 'react'
import RegForm from './RegistrationForm'
import LoginForm from '../../container/LoginForm'

class Forms extends Component {
  render() {
    return (
        <div className='wrapper'>
          <div className='registration'>
            Для новых пользователей:
            <RegForm/>
          </div>
          <div className='autorisation'>
            Уже есть аккаунт?
            <LoginForm/>
          </div>
        </div>
    );
  }
}

export default Forms;
