import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCategories, getSubCategories} from '../actions/DataAction';
import DataIndex from '../components/Data/DataIndex';

const mapStateToProps = state => ({
  sid: state.loginReducer.sid,
  currentIdCat:state.dataReducer.currentIdCat,
  currentIdSub:state.dataReducer.currentIdSub,
  categories: state.dataReducer.categories,
  subCategories:state.dataReducer.subCategories,
  isFetchingCat: state.dataReducer.isFetchingCat,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCategories,
  getSubCategories,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataIndex);