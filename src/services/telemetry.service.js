import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

let reactPlugin = null;
let appInsights = null;

/**
 * Create the App Insights Telemetry Service
 * @return {{reactPlugin: ReactPlugin, appInsights: Object, initialize: Function}} - Object
 */
const createTelemetryService = () => {
  /**
   * Initialize the Application Insights class
   * @param {string} instrumentationKey - Application Insights Instrumentation Key
   * @param {Object} browserHistory - client's browser history, supplied by the withRouter HOC
   * @return {void}
   */
  const initialize = (instrumentationKey, browserHistory) => {
    if (!browserHistory) {
      throw new Error('Could not initialize Telemetry Service');
    }
    if (!instrumentationKey) {
      throw new Error('Could not identify instrumentation key');
    }

    reactPlugin = new ReactPlugin();

    appInsights = new ApplicationInsights({
      config: {
        instrumentationKey,
        maxBatchInterval: 0,
        disableFetchTracking: false,
        extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: {
            history: browserHistory,
          },
        },
      },
    });

    appInsights.loadAppInsights();
  };

  return { reactPlugin, appInsights, initialize };
};

export const applicationInsights = createTelemetryService();
export const getAppInsights = () => appInsights;
/* istanbul ignore next */
export const trackException = exception => {
  if (!appInsights) return;
  appInsights.trackException({ exception });
};
/* istanbul ignore next */
export const trackEvent = (name, properties) => {
  if (!appInsights) return;
  appInsights.trackEvent({ name, properties });
};
