import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { render } from '../../utils/test.utilitiy';
import Communities from '../Communities';
import * as useCommunities from '../../hooks/useCommunities';

describe('Communities', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render loading', () => {
    // arrange
    const useCommunitiesHook = () => {
      return {
        error: null,
        isLoaded: false,
        communities: [],
        sortOrder: null,
        changeSortOrder: jest.fn(),
        pageNumber: 1,
      };
    };
    jest.spyOn(useCommunities, 'default').mockImplementationOnce(useCommunitiesHook);

    // act
    const { getByTestId } = render(<Communities />);

    // assert
    getByTestId('loading');
  });

  it('should render expected fields from list of returned communities', () => {
    // arrange
    const communities = [
      {
        id: 'idValue1',
        name: 'nameValue1',
        slug: 'slug-value-1',
        location: 'locationValue1',
        description: 'descriptionValue1',
        path: 'pathValue1',
      },
      {
        id: 'idValue2',
        name: 'nameValue2',
        slug: 'slug-value-2',
        location: 'locationValue2',
        description: 'descriptionValue2',
        path: 'pathValue2',
      },
    ];
    const useCommunitiesHook = () => {
      return {
        error: null,
        isLoaded: true,
        communities,
        sortOrder: null,
        changeSortOrder: jest.fn(),
        changePage: jest.fn(),
        totalPages: 10,
        pageNumber: 1,
      };
    };
    jest.spyOn(useCommunities, 'default').mockImplementationOnce(useCommunitiesHook);

    const tree = (
      <HelmetProvider>
        <Communities />
      </HelmetProvider>
    );

    // act
    const { getByText } = render(tree);

    // assert
    getByText('Find a Community');

    communities.forEach(community => {
      getByText(community.name);
      getByText(community.location);
      getByText(community.description);
    });
  });

  it('should render error message from failed fetch', async () => {
    // arrange
    const errorMock = new Error('errorMessageValue');
    const useCommunitiesHook = () => {
      return {
        error: errorMock,
        isLoaded: true,
        communities: [],
        changePage: jest.fn(),
        changeSortOrder: jest.fn(),
        sortOrder: null,
        totalPages: 10,
        pageNumber: 1,
      };
    };
    jest.spyOn(useCommunities, 'default').mockImplementationOnce(useCommunitiesHook);

    const theme = createMuiTheme({ palette: { primary: { main: '#fff', light: '#fff' } } });

    const tree = (
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Communities />
        </HelmetProvider>
      </ThemeProvider>
    );

    // act
    const { getByTestId } = render(tree);

    // assert
    // getByText(/\berrorMessageValue\b/);
    expect(getByTestId('snackError')).toContainHTML(errorMock.message);
  });
});
