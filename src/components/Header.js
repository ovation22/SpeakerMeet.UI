import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import routes from '../constants/routes';

const useStyles = makeStyles(theme => ({
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: '16px',
    transition: '0.3s',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
  navSection: {
    marginLeft: 'auto',
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.defaultProps = {
  window: null,
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;
  const image = `${process.env.PUBLIC_URL}/images/speakermeet.png`;

  return (
    <HideOnScroll {...props}>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar} id="back-to-top-anchor">
            <Link href={routes.root.path}>
              <img className="logo" src={image} alt="" />
            </Link>

            <Typography component="span" className={classes.navSection}>
              {sections.map(section => (
                <Link
                  noWrap
                  key={section.title}
                  variant="inherit"
                  href={section.url}
                  className={classes.toolbarLink}
                >
                  {section.title}
                </Link>
              ))}

              <Input
                endAdornment={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <InputAdornment position="end">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                }
              />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

Header.defaultProps = {
  sections: PropTypes.array,
};

Header.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape()),
};
