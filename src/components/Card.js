import React, { PureComponent } from "react";
import { Flipped, spring } from "react-flip-toolkit";
import FeaturedPost from './FeaturedPost';

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
const onListExit = onExit("list");

class Card extends PureComponent {
  shouldFlip = (prev, current) => {
    return prev.type !== current.type;

  };
  render() {
    const { id, title, type, stagger, addToFilteredIds } = this.props;
    const flipId = `item-${id}`;
    return (
      <Flipped
        flipId={flipId}
        onAppear={onElementAppear}
        onExit={type === "grid" ? onGridExit : onListExit}
        key={flipId}
        stagger={stagger}
        shouldInvert={this.shouldFlip}
      >
        <li className="fm-item">
          <Flipped inverseFlipId={flipId}>
            <div>
              <Flipped
                flipId={`${flipId}-content`}
                translate
                shouldFlip={this.shouldFlip}
                delayUntil={flipId}
              >
                <FeaturedPost post={this.props} />
              </Flipped>
            </div>
          </Flipped>
        </li>
      </Flipped>
    );
  }
}

export default Card;
