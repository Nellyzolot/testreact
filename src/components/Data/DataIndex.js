import React, { PropTypes, Component } from 'react'
import axios from 'axios';
import Products from './Products'

class DataIndex extends Component {
  static propTypes = {
    sid: PropTypes.number.isRequired,
    currentIdCat: PropTypes.number.isRequired,
    currentIdSub: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    getSubCategories: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    isFetchingCat: PropTypes.bool.isRequired,
    isFetchingSub: PropTypes.bool.isRequired,
    isFetchingProd: PropTypes.bool.isRequired
  };

  componentWillMount() {
    console.log(this.props)
    const { sid, getCategories } = this.props;
    axios.get('/categories', {
      headers: {
        'sid': sid
      }
    })
        .then(response => {
              getCategories({categories: response.data});
            }
        )
  };

  getSubcategories = (id) => {
    const { sid, getSubCategories } = this.props;
    axios.get('/categories/' + id, {
      headers: {
        'sid': sid
      }
    })
        .then(response => {
              getSubCategories({subCategories: response.data, currentIdCat: id});
            }
        )
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
    const { isFetchingCat, isFetchingSub, isFetchingProd, currentIdCat, currentIdSub, categories, subCategories, products } = this.props;
    return (
        <div>
          {!isFetchingCat ?
              <div className="categories">
                <ul className="categories__list">
                  {categories.map((dataItem) => (
                      <div
                          className={"categories__list-title"}
                          key={dataItem.id}>
                        <li id={dataItem.id}
                            onClick = {() => this.getSubcategories(dataItem.id)}>
                          {dataItem.title}
                        </li>
                        {!isFetchingSub ?
                            <div className="subcategories">
                              {console.log(currentIdCat)}
                              {(dataItem.id === currentIdCat) ?
                              <ul className="subcategories__list">
                                {subCategories.map((dataItem) => (
                                    <div
                                        className={"subcategories__list-title"}
                                        key={dataItem.id}>
                                      <li id={dataItem.id}
                                          onClick = {() => this.getProducts(dataItem.id)}>
                                        {dataItem.title}
                                      </li>
                                      {!isFetchingProd ?
                                          <div>
                                            {(dataItem.id === currentIdSub) ? <Products products={products}/> : null}
                                            {console.log(currentIdSub)}
                                          </div>
                                          :
                                          null
                                      }
                                    </div>
                                ))}
                              </ul>
                              :
                              null}
                            </div>
                            :
                            null
                        }
                      </div>
                  ))}
                </ul>
              </div>
              :
              <p>Loading...</p>
          }
        </div>
    )
  }
}

export default DataIndex;