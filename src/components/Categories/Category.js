import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';

class Category extends Component {

  render() {
    console.log(this.props.data);
    return <div>
      <div>{/*Object.keys(this.props.data).map(item => (
          <p key={item.id}>Hello, {item.title} !</p>
      ))*/}</div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, )(Category);