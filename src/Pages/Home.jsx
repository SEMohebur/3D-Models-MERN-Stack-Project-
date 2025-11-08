import React from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Component/ModelCard";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className=" bg-gradient-to-b from-orange-50 to-white">
      {/* banner section  */}
      <section
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740')",
        }}
        className=" min-h-60 bg-cover flex justify-center items-center m-2"
      >
        <div className=" text-center">
          <h1 className=" font-bold text-4xl text-warning">
            Welcome to Food 3D World
          </h1>
          <p className=" text-white">
            Explore stunning 3D food models that look good enough to eat!
            Perfect for designers, developers, and food lovers.
          </p>
        </div>
      </section>
      {/* latest model  */}
      <section className=" p-5">
        <h2 className=" text-2xl font-bold text-center py-5">Latest Models</h2>
        <div className="  grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.map((model, index) => {
            return <ModelCard model={model} key={index}></ModelCard>;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
