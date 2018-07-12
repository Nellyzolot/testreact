import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryItem from './CategotyItem'

class Categories extends Component {

  handleClick() {
    return <CategoryItem/>
  }

  render() {
    const categoryItems = this.props.categories.categories.map((dataItem) =>
        <li key={dataItem.id.toString()} onClick={this.handleClick.bind(this)}>{dataItem.title}</li>,
        this
    );
    return <div>
          Категория
        <ul>
          { categoryItems }
        </ul>

    </div>
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Categories);