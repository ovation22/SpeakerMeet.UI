import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedPost from '../FeaturedPost';

describe('FeaturedPost', () => {
  it('should expected post fields', () => {
    // arrange
    const post = {
      name: 'nameValue',
      slug: 'slugValue',
      location: 'locationValue',
      description: 'descriptionValue',
      path: 'pathValue',
    };
    const tree = (
      <BrowserRouter>
        <FeaturedPost post={post} />
      </BrowserRouter>
    );

    // act
    const { getByText } = render(tree);

    // assert
    getByText(post.name);
    getByText(post.location);
    getByText(post.description);
    expect(getByText('View Profile').closest('a')).toHaveAttribute('href', `/${post.path}`);
  });
});
