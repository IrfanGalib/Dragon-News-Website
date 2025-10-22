import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import StarIcon from "../assets/star.png";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view, id } =
    news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();
  return (
    <div className="card bg-white shadow-md mb-6">
      <div className="flex bg-base-200 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-sm">{author.name}</h2>
            <p className="text-gray-500 text-sm">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary gap-2 flex">
          <FaRegBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer hover:underline">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>
      {/* Ratings */}
      <div className="border-t-1 border-gray-200 mt-6 "></div>
      <div className="flex justify-between p-5">
        <div className="flex items-center gap-2">
          <img className="w-5" src={StarIcon} alt="" />
          {rating.number}
        </div>
        <div className="flex items-center gap-2">
          <FaEye size={18} /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
