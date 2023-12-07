import React from "react";
import "./card.css";
import { format } from "date-fns";
import { shortenText } from "../../ utilities/utilities";
// // import { scryRenderedComponentsWithType } from "react-dom/test-utils";
const Card = ({ item }) => {
  // console.log(format(new Date(item.release_date), "MMMM dd, yyyy"));
  return (
    <div className="whole-card">
      <img
        className="img-card"
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt="imgCard"
      />
      <div className="info-in-card">
        <h5>{item.original_title}</h5>
        <h6 className="data">
          {format(new Date(item.release_date), "MMMM dd, yyyy")}{" "}
        </h6>
        <button>Action</button>
        <button>Drama</button>
        <p>{shortenText(item.overview)}</p>
      </div>
    </div>
  );
};
export default Card;
