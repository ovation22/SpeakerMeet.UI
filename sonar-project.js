const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: '#{sonarQubeServerUrl}#',
    token: '#{sonarQubeToken}#',
    options: {
      'sonar.projectName': '#{projectName}#',
      'sonar.projectKey': '#{projectKey}#',
      'sonar.sources': './src',
      'sonar.exclusions': '**/*.test.*,**/__snapshots__/**,src/*.ts',
      'sonar.tests': './src',
      'sonar.test.inclusions': './src/**/*.test.tsx',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'reports/test-report.xml',
    },
  },
  () => process.exit(),
);
