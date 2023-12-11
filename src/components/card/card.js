import React from "react";
import "./card.css";
import { format } from "date-fns";
import { shortenText } from "../../ utilities/utilities";
import { Rate } from "antd";

// import { scryRenderedComponentsWithType } from "react-dom/test-utils";
const Card = ({ item }) => {
  return (
    <div className="whole-card">
      <img
        className="img-card"
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt="imgCard"
      />
      <div className="info-in-card">
        <div className="header">
          <div className="title">{item.original_title}</div>
          <div className="circle">
            <div className="vote_average">{item.vote_average.toFixed(1)}</div>
          </div>
        </div>
        <h6 className="data">
          {item.release_date &&
            format(new Date(item.release_date), "MMMM dd, yyyy")}
        </h6>
        <button>Action</button>
        <button>Drama</button>
        <p>{shortenText(item.overview)}</p>
        <div className="rating">
          <Rate allowHalf defaultValue={2.5} count={10} />
        </div>
      </div>
    </div>
  );
};
export default Card;
