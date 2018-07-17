import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts} from '../actions/ProductAction';
import Subcategories from '../components/Data/Subcategories';

const mapStateToProps = state => ({
  sid: state.loginReducer.sid,
  currentIdSub:state.productReducer.currentIdSub,
  subcategories:state.subcategoriesReducer.subcategories,
  products:state.productReducer.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Subcategories);