import React, { Component } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import data from "../constants/speakers";
import Card from './Card';

export default class SpeakerList extends Component {
  state = {
    type: "grid",
    sort: "asc",
    filteredIds: [],
    stagger: "forward",
    spring: "veryGentle"
  };

  addToFilteredIds = id => {
    this.setState(prevState => {
      return {
        filteredIds: prevState.filteredIds.concat(id)
      };
    });
  };

  render() {
    return (
      <div className="fm-example">
        <Flipper
          flipKey={`${this.state.type}-${this.state.sort}-${JSON.stringify(
            this.state.filteredIds
          )}-${JSON.stringify(this.state.stagger)}`}
          spring={this.state.spring}
          staggerConfig={{
            default: {
              reverse: this.state.stagger !== "forward",
              speed: 2
            }
          }}
          decisionData={this.state}
        >
          <div className="fm-flex-container">
            <fieldset>
              <legend>Sort</legend>
              <label
                onClick={() => {
                  this.setState({
                    sort: "asc"
                  });
                }}
              >
                <input
                  type="radio"
                  name="sort"
                  defaultChecked={this.state.sort === "asc"}
                />
                asc
              </label>
              <label
                onClick={() => {
                  this.setState({
                    sort: "desc"
                  });
                }}
              >
                <input
                  type="radio"
                  name="sort"
                  defaultChecked={this.state.sort === "desc"}
                />
                desc
              </label>
            </fieldset>
          </div>

          <Flipped flipId="list">
            <div className="grid">
              <Flipped inverseFlipId="list">
                <ul className="list-contents" style={{listStyleType: 'none'}}>
                  {[...data]
                    .filter(d => !this.state.filteredIds.includes(d.id))
                    .sort((a, b) => {
                      if (this.state.sort === "asc") {
                        return a.id - b.id;
                      } else {
                        return b.id - a.id;
                      }
                    })
                    .map(d => (
                      <Card
                        id={d.id}
                        title={d.title}
                        stagger={["forward", "reverse"].includes(
                          this.state.stagger
                        )}
                        type={this.state.type}
                        key={d.id}
                        addToFilteredIds={this.addToFilteredIds}
                      />
                    ))}
                </ul>
              </Flipped>
            </div>
          </Flipped>
        </Flipper>
      </div>
    );
  }
}
