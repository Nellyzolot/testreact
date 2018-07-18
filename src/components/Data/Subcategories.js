import React, {Component, PropTypes} from 'react'
import Products from './Products'
import classNames from 'classnames';

class Subcategories extends Component {
  static propTypes = {
    sid: PropTypes.number.isRequired,
    subcategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentIdSub: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    getProducts: PropTypes.func.isRequired,
  };

  getProducts = (id) => {
    const {sid, getProducts} = this.props;
    getProducts(id, sid);
  };

  render() {
    const {subcategories, currentIdSub, products} = this.props;
    return (
        <div className='subcategories'>
          <ul className='subcategories__list'>
            {subcategories.map((dataItem) => (
                <div
                    className={classNames('subcategories__list-title', {'subcategories__list-title_active': dataItem.id === currentIdSub})}
                    key={dataItem.id}>
                  <li id={dataItem.id}
                      onClick={() => this.getProducts(dataItem.id)}>
                    {dataItem.title}
                  </li>
                  {(dataItem.id === currentIdSub) ? <Products products={products}/> : null}
                </div>
            ))}
          </ul>
        </div>
    );
  }
}

export default Subcategories;