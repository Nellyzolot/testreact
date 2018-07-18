import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { setSid } from '../actions/LoginAction';
import LoginForm from '../components/Forms/LoginForm';

const mapStateToProps = state => ({
  sid: state.loginReducer.sid,
  error: state.loginReducer.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSid
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);