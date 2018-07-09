import React, { Component } from 'react'

class Categories extends Component {
  render() {
    return (
        <div className='row'>
          <h3 className='col-md-12'>{this.props.params.categoryId}</h3>
          <div className='col-md-12'>Здесь будет список релизов</div>
        </div>
    )
  }
}

export default Categories;