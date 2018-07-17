import React, { PropTypes, Component } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import SubCategories from '../../container/SubCategories'

class DataIndex extends Component {
  static propTypes = {
    sid: PropTypes.number.isRequired,
    currentIdCat: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    getCategories: PropTypes.func.isRequired,
    getSubCategories: PropTypes.func.isRequired,
    isFetchingCat: PropTypes.bool.isRequired,
  };

  componentWillMount() {
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

  getSubcategories = (id, check) => {
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
    this.check = true;
  };

  render() {
    const { isFetchingCat, currentIdCat, categories, subCategories } = this.props;
    let check = false;
    return (
        <div>
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
                          {(dataItem.id === currentIdCat) ? <SubCategories subCategories={subCategories} /> : null}
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