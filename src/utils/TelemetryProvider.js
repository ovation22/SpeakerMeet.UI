import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withAITracking } from '@microsoft/applicationinsights-react-js';
import { withRouter } from 'react-router-dom';
import { applicationInsights } from '../services/telemetry.service';

/**
 * This Component provides telemetry with Azure App Insights
 *
 * NOTE: the package '@microsoft/applicationinsights-react-js' has a HOC withAITracking that requires this to be a
 * Class Component rather than a Functional Component
 */
class TelemetryProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialized: false,
    };
  }

  componentDidMount() {
    const { initialized } = this.state;
    const { history, instrumentationKey, disabled } = this.props;

    if (!disabled && !initialized) {
      applicationInsights.initialize(instrumentationKey, history);
      this.setState({ initialized: true });
    }
  }

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

TelemetryProvider.propTypes = {
  history: PropTypes.shape({}).isRequired,
  instrumentationKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withRouter(withAITracking(applicationInsights.reactPlugin, TelemetryProvider));
