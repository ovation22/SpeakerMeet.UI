import React from 'react';
import { render } from '@testing-library/react';
import ErrorSnackbar from '../ErrorSnackbar';

describe('ErrorSnackbar', () => {
  it('should not render given null is passed', () => {
    // arrange
    const tree = <ErrorSnackbar />;

    // act
    const { queryByText } = render(tree);

    // assert
    expect(queryByText('Error')).toBeNull();
  });

  it('should render expected give passed message', () => {
    // arrange
    const error = new Error('errorMessageValue');
    const tree = <ErrorSnackbar error={error} />;

    // act
    const { getByRole } = render(tree);

    // assert
    expect(getByRole('alert')).toHaveTextContent(error.message);
  });
});
