import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import ComputerListScreen from './ComputerListView';
import { loadCPUList } from './ComputerListState';

export default compose(
  connect(
    state => ({
      isLoading: state.computerList.isLoading,
      CPUList: state.computerList.CPUList,
    }),
    dispatch => ({
      loadCPUList: () => dispatch(loadCPUList())
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadCPUList();
    },
  }),
)(ComputerListScreen);
