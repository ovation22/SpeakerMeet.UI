import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';

export default function TwitterContent({ url }) {
  useEffect(() => {
    const anchor = document.createElement('a');
    anchor.setAttribute('class', 'twitter-timeline');
    anchor.setAttribute('data-tweet-limit', '3');
    anchor.setAttribute('data-chrome', 'noheader nofooter');
    anchor.setAttribute('data-cards', 'hidden');
    anchor.setAttribute('data-conversation', 'none');
    anchor.setAttribute('href', url);
    document.getElementsByClassName('twitter-embed')[0].appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.getElementsByClassName('twitter-embed')[0].appendChild(script);
  }, [url]);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed" />
    </section>
  );
}

TwitterContent.propTypes = {
  url: PropTypes.string.isRequired,
};
