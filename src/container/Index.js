import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCategories, getSubCategories, getProducts} from '../actions/DataAction';
import DataIndex from '../components/Data/DataIndex';

const mapStateToProps = state => ({
  sid: state.loginReducer.sid,
  currentIdCat:state.dataReducer.currentIdCat,
  currentIdSub:state.dataReducer.currentIdSub,
  categories: state.dataReducer.categories,
  subCategories:state.dataReducer.subCategories,
  products:state.dataReducer.products,
  isFetchingCat: state.dataReducer.isFetchingCat,
  isFetchingSub: state.dataReducer.isFetchingSub,
  isFetchingProd: state.dataReducer.isFetchingProd
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCategories,
  getSubCategories,
  getProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataIndex);