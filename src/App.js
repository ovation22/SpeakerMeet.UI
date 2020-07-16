import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import Main from './Main';

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: `"Helvetica Neue", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: 60,
      '@media (min-width:560px)': {
        fontSize: 40,
      },
    },
    h2: {
      fontSize: 50,
      '@media (min-width:560px)': {
        fontSize: 40,
      },
      letterSpacing: 0,
      fontWeight: 400,
      fontStyle: 'normal',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: 40,
      '@media (min-width:560px)': {
        fontSize: 20,
      },
      fontWeight: 700,
      letterSpacing: 0,
      fontStyle: 'normal',
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

theme.typography.h3 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: 28,
  },
};

theme.typography.h4 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </ThemeProvider>
      <div>Hooray!</div>
    </div>
  );
}

export default App;
