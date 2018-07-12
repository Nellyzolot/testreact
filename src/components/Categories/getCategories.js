import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CategoriesAction from '../../actions/CategoriesAction';
import axios from 'axios';
import Categories from "./Categories";

class GetCategories extends Component {

  componentWillMount() {
    const { sid } = this.props.login;
    axios.get('/categories', {
      headers: {
        'sid': sid
      }
    })
    .then(response => {
          this.props.actions.getCategories({categories: response.data});
        }
    )
  }

  render() {
    const { isFetching } = this.props.categories;
    return (
        <div>
          {isFetching ?
              <Categories/>
          :
              <p>Loading...</p>
          }
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CategoriesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCategories);