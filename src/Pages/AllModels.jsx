import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Component/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);
    fetch(
      `https://3d-models-server-sigma.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data), setModels(data), setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  if (loading) {
    return <p className=" text-center">Loading .....</p>;
  }
  return (
    <div>
      <div className=" py-5 text-center bg-gradient-to-b from-orange-50 to-white">
        <h2 className=" text-2xl font-bold">All Models</h2>
        <p className=" font-thin"> Explore Models</p>
      </div>

      <form onSubmit={handleFormSubmit} className=" flex justify-center">
        <div className="join">
          <div>
            <label className="input validator join-item">
              <input
                type="text"
                className=""
                name="search"
                placeholder="search models"
                required
              />
            </label>
            <div className="validator-hint hidden">Enter Models Name</div>
          </div>
          <button className="btn btn-neutral join-item">Search</button>
        </div>
      </form>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        {models?.map((model, index) => {
          return <ModelCard model={model} key={index}></ModelCard>;
        })}
      </div>
    </div>
  );
};

export default AllModels;
