import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts} from '../actions/DataAction';
import SubCategories from '../components/Data/SubCategories';

const mapStateToProps = state => ({
  sid: state.loginReducer.sid,
  currentIdSub:state.dataReducer.currentIdSub,
  subCategories:state.dataReducer.subCategories,
  products:state.dataReducer.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SubCategories);