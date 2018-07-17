import React, {Component, PropTypes} from 'react'
import axios from 'axios';
import Products from './Products'
import classNames from "classnames";

class SubCategories extends Component {
  static propTypes = {
    sid: PropTypes.number.isRequired,
    currentIdSub: PropTypes.number.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    getProducts: PropTypes.func.isRequired,
  };

  getProducts = (id) => {
    const { sid, getProducts } = this.props;
    axios.get('/products/' + id, {
      headers: {
        'sid': sid
      }
    })
        .then(response => {
              getProducts({products: response.data, currentIdSub: id});
            }
        )
  };

  render() {
    const { subCategories, currentIdSub, products } = this.props;
    return <div className="subcategories">
      <ul className="subcategories__list">
        {subCategories.map((dataItem) => (
            <div
                className={classNames("subcategories__list-title", { "subcategories__list-title_active" : dataItem.id === currentIdSub})}
                key={dataItem.id}>
              <li id={dataItem.id}
                  onClick = {() => this.getProducts(dataItem.id)}>
                {dataItem.title}
              </li>
                {(dataItem.id === currentIdSub) ? <Products products={products}/> : null}
            </div>
        ))}
      </ul>
    </div>
  }
}

export default SubCategories;