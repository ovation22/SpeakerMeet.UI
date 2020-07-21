import React, { PureComponent } from "react";
import { Flipped, spring } from "react-flip-toolkit";
import FeaturedPost from './FeaturedPost';
import Grid from '@material-ui/core/Grid';

const onElementAppear = (el, index) =>
  spring({
    onUpdate: val => {
      el.style.opacity = val;
    },
    delay: index * 50
  });

const onExit = type => (el, index, removeElement) => {
  spring({
    config: { overshootClamping: true },
    onUpdate: val => {
      el.style.transform = `scale${type === "grid" ? "X" : "Y"}(${1 - val})`;
    },
    delay: index * 50,
    onComplete: removeElement
  });

  return () => {
    el.style.opacity = "";
    removeElement();
  };
};

const onGridExit = onExit("grid");

class FlippedItem extends PureComponent {
  shouldFlip = (prev, current) => {
    if (prev.type !== current.type) {
      return true;
    }
    return false;
  };
  render() {
    const { id, title, type, stagger, post } = this.props;
    const flipId = `item-${id}`;
    return (
      <Flipped
        flipId={flipId}
        onAppear={onElementAppear}
        onExit={onGridExit}
        key={flipId}
        stagger={stagger}
        shouldInvert={this.shouldFlip}
      >
        <Grid item style={{display: 'inline-flex'}} xs={12} md={3}>
          <Flipped inverseFlipId={flipId}>
            <Flipped
              flipId={`${flipId}-content`}
              translate
              shouldFlip={this.shouldFlip}
              delayUntil={flipId}
            >
              <FeaturedPost post={post} style={{width: 345, margin: 12}} />
            </Flipped>
          </Flipped>
        </Grid >
      </Flipped>
    );
  }
}

export default FlippedItem;
