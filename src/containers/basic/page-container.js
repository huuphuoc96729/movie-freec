import React, {Fragment} from 'react';
import CLoading from "../../ccontainers/cbasic/cloading";

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  async componentDidMount() {
    // await this.props.onInit();
  }
  
  render() {
    return (
      <Fragment>
        <CLoading/>
        {this.props.children}
      </Fragment>
    );
  }
}

export default PageContainer;