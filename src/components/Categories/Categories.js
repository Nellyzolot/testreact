import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as DataAction from "../../actions/DataAction";
import axios from "axios";
import Category from "./Category"

class Categories extends Component {

  componentWillMount() {
    const { sid } = this.props.login;
    axios.get('/categories', {
      headers: {
        'sid': sid
      }
    })
        .then(response =>
            this.props.actions.getData({data: response.data})
        )
  }

  render() {

    return (
        <div className='row'>
          Категории
          <Category/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DataAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);