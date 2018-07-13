import React, { Component } from 'react';

class Products extends Component {
  render() {
    const { products } = this.props
    console.log(products[0].categoryId)
    return <div className="products">
      <ul className="products__list">
        {products.map((dataItem) => (
            <div className={"products__list-title"} key={dataItem.id.toString()} >
              <li
                  id={dataItem.id.toString()}>
                {dataItem.title}
              </li>
            </div>
        ))}
      </ul>
    </div>
  }
}

export default Products;
