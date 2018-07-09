import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Forms from '../components/Forms'
import * as formActions from '../actions/FormsActions'

class App extends Component{
  render() {
    const { page } = this.props;
    const { getPhotos } = this.props.formActions;
    return (
        <div className='container'>
          {/*<Forms photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>*/}
          {this.props.children}
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    page: state.page,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    formActions: bindActionCreators(formActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
