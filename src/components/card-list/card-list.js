import React, { Component } from "react";
import Card from "../card";
import "./card-list.css";
export default class CardList extends Component {
  render() {
    return (
      <div className="rectangle">
        <ul className="list-of-cards">
          <li>{<Card />}</li>
          <li>{<Card />}</li>
          <li>{<Card />}</li>
          <li>{<Card />}</li>
          <li>{<Card />}</li>
          <li>{<Card />}</li>
        </ul>
      </div>
    );
  }
}
