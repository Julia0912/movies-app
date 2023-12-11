import React, { Component } from "react";
import Card from "../card";
import "./card-list.css";
import SwapiService from "../../services/swapi-service";
import Error from "../../error";
import { Input, Spin } from "antd";

export default class CardList extends Component {
  swapiService = new SwapiService();
  state = {
    results: [],
    loading: false,
    error: false,
    searchText: "",
  };

  constructor() {
    super();
    this.updateMovie();
  }
  afterLoading() {
    this.setState({
      loading: false,
    });
  }
  addText = (text) => {
    this.setState({ searchText: text });
  };

  onError(err) {
    this.setState({ error: true, loading: false });
  }
  updateMovie(movieName) {
    this.setState({ loading: true });

    this.swapiService
      .getResults(movieName)
      .then((body) => {
        this.setState({
          results: body,
        });
      })
      .then(() => this.afterLoading())
      .catch(() => this.onError());
  }
  render() {
    const { results, loading, error } = this.state;
    const hasDate = !(loading || error);
    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spin size={"large"} fullscreen={true} /> : null;
    const content = hasDate ? <CardView results={results} /> : null;

    return (
      <div className="rectangle">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.updateMovie(this.state.searchText);
          }}
        >
          <Input
            placeholder="search"
            onChange={(event) => {
              this.addText(event.target.value);
            }}
          />
        </form>
        {loading ? spinner : content}

        {errorMessage}
      </div>
    );
  }
}
const CardView = ({ results }) => {
  return (
    <ul className="list-of-cards ">
      {results.map((item) => {
        return (
          <li key={item.id}>
            <Card item={item} />
          </li>
        );
      })}
    </ul>
  );
};
