import {connect} from "react-redux";
import PageContainer from "../../containers/basic/page-container";

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: async () => {}
  }
};

const CPageContainer = connect(mapStateToProps, mapDispatchToProps)(PageContainer);

export default CPageContainer;