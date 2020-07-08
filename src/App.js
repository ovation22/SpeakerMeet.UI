import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import Main from './components/Main';

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: `"Helvetica Neue", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    // type: 'dark',
    primary: {
      main: blue[400],
    },
    secondary: {
      main: blue[800],
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <div>Hooray!</div>
      </ThemeProvider>
    </div>
  );
}

export default App;
