import React, { Component } from 'react';
import {connect} from "react-redux";

class Products extends Component {
  render() {
    return <div className="subcategories">
      <ul className="subcategories__list">
        {this.props.products.products.map((dataItem) => (
            <div className={"subcategories__list-title"} key={dataItem.id.toString()} >
              <li
                  id={dataItem.id.toString()}
                  onClick = {() => this.handleClick(dataItem.id.toString())}>
                {dataItem.title}
              </li>
            </div>
        ))}
      </ul>
    </div>
  }
}


function mapStateToProps(state) {
  return {
    products: state.dataReducer
  }
}

export default connect(mapStateToProps)(Products);
