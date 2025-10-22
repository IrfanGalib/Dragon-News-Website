import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5 mt-8">
      <img className="w-full h-350px" src={news.image_url} alt="" />
      <h2>{news.title}</h2>
      <p>{news.details}</p>
      <Link
        className="btn btn-secondary w-50"
        to={`/category/${news.category_id}`}
      >
        Back To Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
