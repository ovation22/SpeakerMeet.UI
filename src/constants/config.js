const { NODE_ENV, REACT_APP_APPLICATION_INSIGHTS_TELEMETRY_KEY } = process.env;

const nodeEnvironments = {
  production: 'production',
};

const config = {
  nodeEnv: NODE_ENV,
  nodeEnvironments,
  applicationInsightsTelemetryKey: REACT_APP_APPLICATION_INSIGHTS_TELEMETRY_KEY,
};

export default {
  ...config,
};
