import React, { PropTypes, Component } from 'react'
import RegForm from './Forms/RegistrationForm'
import AutoForm from './Forms/AutorisationForm'

class Forms extends Component {
  // onYearBtnClick(event) {
  //   this.props.getPhotos( + event.target.textContent)
  // }

  render() {
    // const { photos, year, fetching } = this.props;
    return (
      <div className="wrapper">
        {/*<p>Сейчас, {year}!</p>*/}
        {/*<button onClick={this.onYearBtnClick.bind(this)}>2016</button>*/}
        {/*<button onClick={this.onYearBtnClick.bind(this)}>2015</button>*/}
        {/*<button onClick={this.onYearBtnClick.bind(this)}>2014</button>*/}
        {/*<div>*/}
          {/*{*/}
            {/*fetching ?*/}
                {/*<p>Загрузка...</p>*/}
                {/*:*/}
                {/*<p>У тебя {photos.length} фото.</p>*/}
          {/*}*/}
        {/*</div>*/}

        <div className="registration">
          Для новых пользователей:
          <RegForm />
        </div>
        <div className="autorisation">
          Уже есть аккаунт?
          <AutoForm />
        </div>
      </div>
    );
  }
}

// Forms.propTypes = {
//   year: PropTypes.number.isRequired,
//   photos: PropTypes.array.isRequired,
//   getPhotos: PropTypes.func.isRequired
// };

export default Forms;
