const {
  NODE_ENV,
  REACT_APP_APPLICATION_INSIGHTS_TELEMETRY_KEY,
  REACT_APP_URL,
  REACT_APP_DISQUS_SHORT_NAME,
} = process.env;

const nodeEnvironments = {
  production: 'production',
};

const config = {
  nodeEnv: NODE_ENV,
  nodeEnvironments,
  applicationInsightsTelemetryKey: REACT_APP_APPLICATION_INSIGHTS_TELEMETRY_KEY,
  url: REACT_APP_URL,
  disqusShortName: REACT_APP_DISQUS_SHORT_NAME,
};

export default {
  ...config,
};
