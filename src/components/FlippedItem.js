import React from 'react';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Flipped, spring } from 'react-flip-toolkit';
import FeaturedPost from './FeaturedPost';

const onElementAppear = (el, index) =>
  spring({
    onUpdate: val => {
      el.style.opacity = val; // eslint-disable-line no-param-reassign
    },
    delay: index * 50,
  });

const onExit = type => (el, index, removeElement) => {
  spring({
    config: { overshootClamping: true },
    onUpdate: val => {
      el.style.transform = `scale${type === 'grid' ? 'X' : 'Y'}(${1 - val})`; // eslint-disable-line no-param-reassign
    },
    delay: index * 50,
    onComplete: removeElement,
  });

  return () => {
    el.style.opacity = ''; // eslint-disable-line no-param-reassign
    removeElement();
  };
};

const onGridExit = onExit('grid');
const shouldFlip = (prev, current) => {
  return prev.type !== current.type;
};

export default function FlippedItem(props) {
  const { id, stagger, post } = props;
  const flipId = `item-${id}`;
  return (
    <Flipped
      flipId={flipId}
      onAppear={onElementAppear}
      onExit={onGridExit}
      key={flipId}
      stagger={stagger}
      shouldInvert={shouldFlip}
    >
      <Grid item style={{ display: 'inline-flex' }} xs={12} md={3}>
        <Flipped inverseFlipId={flipId}>
          <Flipped
            flipId={`${flipId}-content`}
            translate
            shouldFlip={shouldFlip}
            delayUntil={flipId}
          >
            <FeaturedPost post={post} style={{ width: 345, margin: 12 }} />
          </Flipped>
        </Flipped>
      </Grid>
    </Flipped>
  );
}

FlippedItem.defaultProps = {
  post: null,
};

FlippedItem.propTypes = {
  id: PropTypes.number.isRequired,
  stagger: PropTypes.string.isRequired,
  post: PropTypes.shape(),
};
