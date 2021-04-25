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

    const twitterEmbed = document.getElementById('twitter-embed');
    if (twitterEmbed.hasChildNodes()) {
      twitterEmbed.innerHTML = '';
    }

    twitterEmbed.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    twitterEmbed.appendChild(script);
  }, [url]);

  return (
    <section className="twitterContent">
      <div id="twitter-embed" className="twitter-embed" />
    </section>
  );
}

TwitterContent.propTypes = {
  url: PropTypes.string.isRequired,
};
