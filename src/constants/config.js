const {
  NODE_ENV,
  REACT_APP_APPLICATION_INSIGHTS_TELEMETRY_KEY,
  REACT_APP_URL,
  REACT_APP_API,
  REACT_APP_IMAGES,
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
  api: REACT_APP_API,
  images: REACT_APP_IMAGES,
  disqusShortName: REACT_APP_DISQUS_SHORT_NAME,
};

export default {
  ...config,
};
