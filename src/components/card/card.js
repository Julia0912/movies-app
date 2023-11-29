import React, { Component } from "react";
import "./card.css";
export default class Card extends Component {
  render() {
    return (
      <div className="whole-card">
        <img className="img-card" src="" alt="imgCard" />
        <div className="info-in-card">
          <h5>The way back</h5>
          <h6 className="data">March 5, 2020 </h6>
          <button>Action</button>
          <button>Drama</button>
          <p>
            A former basketball all-star, who has lost his wife and family
            foundation in a struggle with addiction attempts to regain his soul
            and salvation by becoming the coach of a disparate ethnically mixed
            high ...
          </p>
        </div>
      </div>
    );
  }
}
