import React, { Component } from 'react'
import axios from "axios/index";

class Categories extends Component {
  componentWillMount() {
    axios.get('/categories', {
      headers: {
        'sid': 123
      }
    })
        .then(response => console.log(response.data))
  }

  render() {
    return (
        <div className='row'>
          Категории
        </div>
    )
  }
}

export default Categories;