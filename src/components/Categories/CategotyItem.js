import React, { Component } from 'react'

class CategoryItem extends Component {

  render() {
    const items = ['Коровье молоко', 'Козье молоко', 'Яйца'];
    const listItems = items.map((dataItem) =>
        <li>{dataItem}</li>
    );
    return <div>
      Категория
      <ul>{ listItems }</ul>
    </div>
  }
}

export default CategoryItem;