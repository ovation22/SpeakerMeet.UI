import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const ErrorSnackbar = ({ error }) => {
  const [alertOpen, setAlertOpen] = useState(Boolean(error));

  useEffect(() => {
    if (error) {
      setAlertOpen(true);
    }
  }, [error]);

  return error ? (
    <Snackbar open={alertOpen} autoHideDuration={6000} onClose={() => setAlertOpen(false)}>
      <Alert severity="error" data-testid="snackError">
        Error:
        {error.message}
      </Alert>
    </Snackbar>
  ) : null;
};

ErrorSnackbar.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.node,
  }),
};

ErrorSnackbar.defaultProps = {
  error: null,
};

export default ErrorSnackbar;
