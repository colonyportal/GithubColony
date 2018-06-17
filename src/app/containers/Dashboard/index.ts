import { connect } from 'react-redux'
import { fetchDomainCount } from "actions/colony";
import Dashboard from 'app/components/Dashboard';

function mapStateToProps(state: any) {
  return {
    domainCount: state.colony.domainCount,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getDomainCount: (colonyAddress) => dispatch(fetchDomainCount(colonyAddress))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);