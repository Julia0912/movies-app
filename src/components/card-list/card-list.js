import React, { Component } from "react";
import Card from "../card";
import "./card-list.css";
import SwapiService from "../../services/swapi-service";

export default class CardList extends Component {
  swapiService = new SwapiService();
  state = {
    results: [],
  };

  constructor() {
    super();
    this.updateMovi();
  }
  updateMovi() {
    this.swapiService.getResults().then((body) => {
      this.setState({
        results: body,
      });
    });
  }
  render() {
    const { results } = this.state;

    return (
      <ul className="list-of-cards rectangle">
        {results.map((item) => {
          return (
            <li key={item.id}>
              <Card item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}
