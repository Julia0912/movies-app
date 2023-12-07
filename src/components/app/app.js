import React, { Component } from "react";
import "./app.css";
import CardList from "../card-list";

export default class App extends Component {
  // state = {
  //   movies: [this.crateCard(), this.crateCard()],
  // };

  // crateCard(id) {
  //   return {
  //     id,
  //     name: null,
  //     description: null,
  //     createTime: new Date(),
  //   };
  // }

  render() {
    return <CardList />;
  }
}
