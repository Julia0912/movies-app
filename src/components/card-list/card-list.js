import React, { Component } from "react";
import Card from "../card";
import "./card-list.css";
import SwapiService from "../../services/swapi-service";
import Error from "../../error";
import { Input, Spin, Pagination } from "antd";

export default class CardList extends Component {
  swapiService = new SwapiService();
  state = {
    results: [],
    loading: false,
    error: false,
    searchText: "terminator",
    pageSize: 5,
    total: 0,
    page: 1,
  };

  componentDidMount() {
    this.updateMovie();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.page !== prevState.page) {
      this.updateMovie(this.state.searchText, this.state.page);
    }
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

  updateMovie(movieName, page) {
    this.setState({ loading: true });

    this.swapiService
      .getResults(movieName, page)
      .then((body) => {
        // console.log(body);
        this.setState({
          results: body.results,
          total: body.total_results,
          page: page,
        });
      })
      .then(() => this.afterLoading())
      .then(() => console.log(this.state.totalPages))
      .catch(() => this.onError());
  }
  render() {
    const { results, loading, error } = this.state;
    const hasDate = !(loading || error);
    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spin size={"large"} fullscreen={true} /> : null;
    const content = hasDate ? <CardView results={results} /> : null;
    function debounce(func, ms) {
      let timeout;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
      };
    }
    const pagination = (
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          total={this.state.total}
          defaultPageSize={6}
          showSizeChanger={false}
          onChange={(page, pageSize) => {
            this.setState({ page: page });
          }}
        />
      </div>
    );

    return (
      <div className="rectangle">
        <form
        // onSubmit={(event) => {
        //   event.preventDefault();
        //
        // }}
        >
          <Input
            placeholder="search"
            onChange={(event) => {
              this.addText(event.target.value);
              debounce(this.updateMovie(event.target.value), 2000);
            }}
          />
        </form>
        {loading ? spinner : content}

        {errorMessage}
        {pagination}
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
