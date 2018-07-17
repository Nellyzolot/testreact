import "regenerator-runtime/runtime";
import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import Subcategories from '../../container/Subcategories'

class DataIndex extends Component {
  static propTypes = {
    sid: PropTypes.number.isRequired,
    currentIdCat: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    subcategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    getCategories: PropTypes.func.isRequired,
    getSubcategories: PropTypes.func.isRequired,
    isFetchingCat: PropTypes.bool.isRequired,
    isFetchingSub: PropTypes.bool.isRequired,
  };

  componentWillMount() {
     const { sid, getCategories } = this.props;
     console.log(getCategories);
     getCategories( sid );
  };

  getSubcategories = (id) => {
    const { sid, getSubcategories } = this.props;
    getSubcategories (id, sid);
  };

  render() {
    const { isFetchingCat, currentIdCat, categories, subcategories, isFetchingSub } = this.props;
    let check = false;
    return (
        <div className="container-lists">
          {!isFetchingCat ?
              <div className="categories">
                <ul className="categories__list">
                  {categories.map((dataItem) => (
                      <div
                          className={classNames("categories__list-title", { "categories__list-title_active" : dataItem.id === currentIdCat})}
                          key={dataItem.id}>
                        <li id={dataItem.id}
                            onClick = {() => this.getSubcategories(dataItem.id, check)}>
                          {dataItem.title}
                        </li>
                        {!isFetchingSub ?
                            <div>
                          {(dataItem.id === currentIdCat) ? <Subcategories subcategories={subcategories} /> : null}
                            </div>
                          :
                            null}
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