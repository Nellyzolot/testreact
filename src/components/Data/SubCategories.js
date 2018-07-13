import React, { Component } from 'react'

class SubCategories extends Component {
  render() {
    const { subCategories } = this.props
    return <div className="subcategories">
      <ul className="subcategories__list">
        {subCategories.map((dataItem) => (
            <div className={"subcategories__list-title"} key={dataItem.id.toString()} >
              <li
                  id={dataItem.id.toString()}
                  onClick = {() => this.handleClick(dataItem.id.toString())}>
                {dataItem.title}
              </li>
            </div>
        ))}
      </ul>
    </div>
  }
}

export default SubCategories;