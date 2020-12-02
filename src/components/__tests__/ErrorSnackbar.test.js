import React from 'react';
import { render } from '@testing-library/react';
import ErrorSnackbar from '../ErrorSnackbar';

describe('ErrorSnackbar', () => {
  // eslint-disable-next-line react/prop-types
  const TestHarness = ({ error }) => (
    <>
      body
      <ErrorSnackbar error={error} />
    </>
  );

  it('should not render given error is not passed', () => {
    // arrange
    const tree = <TestHarness />;

    // act
    const { queryByText } = render(tree);

    // assert
    expect(queryByText('Error')).toBeNull();
  });

  it('should render error message', async () => {
    // arrange
    const error = new Error('errorMessageValue');
    const tree = <TestHarness error={error} />;

    // act
    const { getByRole } = render(tree);

    // assert
    const alert = getByRole('alert');
    expect(alert).toHaveTextContent(error.message);
  });
});
