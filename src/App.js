import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import Main from './Main';
import TelemetryProvider from './utils/TelemetryProvider';
import config from './constants/config';

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: `"Helvetica Neue", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontWeight: 700,
      letterSpacing: 0,
      fontStyle: 'normal',
      fontSize: 40,
    },
    h2: {
      fontSize: 30,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: 0,
      fontStyle: 'normal',
      fontSize: 30,
    },
    h4: {
      fontSize: 30,
    },
    h5: {
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: 0,
      fontStyle: 'normal',
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: 0,
      fontStyle: 'normal',
      textTransform: 'uppercase',
    },
  },
  palette: {
    // type: 'dark',
    primary: {
      main: '#00abff',
      light: '#33bbff',
      dark: '#0077b2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3a414d',
      light: '#616770',
      dark: '#282d35',
      contrastText: '#fff',
    },
    default: {
      main: blue[200],
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: grey[0],
      },
      colorSecondary: {
        backgroundColor: grey[800],
      },
      colorDefault: {
        backgroundColor: grey[200],
      },
    },
  },
});

const disableTelemetry =
  config.nodeEnv !== config.nodeEnvironments.production ||
  config.applicationInsightsTelemetryKey === '';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <TelemetryProvider
            disabled={disableTelemetry}
            instrumentationKey={config.applicationInsightsTelemetryKey}
          >
            <Main />
          </TelemetryProvider>
        </BrowserRouter>
      </ThemeProvider>
      <div style={{ display: 'none' }}>Hooray!</div>
    </div>
  );
}

export default App;
