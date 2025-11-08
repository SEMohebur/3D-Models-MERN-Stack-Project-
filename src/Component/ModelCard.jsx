import React from "react";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  const { _id, category, description, name, thumbnail, created_by } = model;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          className=" max-h-48 w-full object-cover"
          src={thumbnail}
          alt="thumb"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="">
          <span className=" bg-fuchsia-600 text-white p-1 rounded-full">
            {category}
          </span>
        </p>
        <p className=" text-emerald-600 text-sm">{created_by}</p>
        <p>{description.slice(0, 70)}...</p>
        <div className="card-actions grid">
          <Link
            to={`/detail/${_id}`}
            className="btn btn-primary rounded-full bg-fuchsia-600 border-none hover:bg-fuchsia-400 hover:text-gray-700"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
