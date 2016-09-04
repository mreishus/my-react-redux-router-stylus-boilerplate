import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Layout from './Layout';

function mapStateToProps(state) {
  return {
	clicks: state.clicks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ConnectedLayout = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default ConnectedLayout;
