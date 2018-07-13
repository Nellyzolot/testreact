import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import SubCategories from './SubCategories'
import * as CategoriesAction from "../../actions/DataAction";
import axios from "axios/index";

class Categories extends Component {
  handleClick = (id) => {
    const { sid } = this.props.login;
    axios.get('/categories/' + id, {
      headers: {
        'sid': sid
      }
    })
        .then(response => {
              console.log(response.data);
              this.props.actions.getSubCategories({subCategories: response.data});
            }
        )
  }

  render() {
    const { isFetching } = this.props.categories;
    return <div className="categories">
      <ul className="categories__list">
        {this.props.categories.categories.map((dataItem) => (
            <div className={"categories__list-title"} key={dataItem.id.toString()} >
              <li
                  id={dataItem.id.toString()}
                  onClick = {() => this.handleClick(dataItem.id.toString())}>
                {dataItem.title}
              </li>
              {!isFetching ?
                  <SubCategories/>
                  :
                  <p>Loading...</p>
              }
            </div>
        ))}
      </ul>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    login: state.loginReducer,
    categories: state.dataReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CategoriesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);