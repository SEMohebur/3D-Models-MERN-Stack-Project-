import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import ModelCard from "../Component/ModelCard";

const MyDownload = () => {
  const { userInfo } = use(AuthContext);

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://3d-models-server-sigma.vercel.app/my-download?email=${userInfo.email}`,
      {
        headers: {
          authorization: `Bearer ${userInfo.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setModels(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // console.log(userInfo);

  if (loading) {
    return <p>Loading ....</p>;
  }

  return (
    <div>
      <h2 className=" text-2xl font-bold text-center py-5"> My Downloaded</h2>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        {models?.map((model, index) => {
          return <ModelCard model={model} key={index}></ModelCard>;
        })}
      </div>
    </div>
  );
};

export default MyDownload;
