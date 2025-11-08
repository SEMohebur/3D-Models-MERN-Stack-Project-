import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";

const DetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { userInfo } = use(AuthContext);
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  // single data get and send a access token
  useEffect(() => {
    fetch(`https://3d-models-server-sigma.vercel.app/models/${id}`, {
      headers: {
        authorization: `Bearer ${userInfo.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModel(data.result), setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [userInfo, id, refetch]);

  // handle delete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://3d-models-server-sigma.vercel.app/models/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userInfo.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/allModels");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => alert(err.message));
      }
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleDownload = () => {
    const finalModel = {
      name: model.name,
      dawnload: model.dawnload,
      created_by: model.created_by,
      category: model.category,
      description: model.description,
      thumbnail: model.thumbnail,
      created_at: new Date(),

      downloaded_by: userInfo.email,
    };
    fetch(`https://3d-models-server-sigma.vercel.app/download/${model._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalModel),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data),
          alert("Download Successfully done"),
          setRefetch(!refetch);
      })
      .catch((err) => console.log(err.message));
  };

  console.log(model);

  return (
    <div className="hero bg-gradient-to-b from-orange-50 to-white">
      <div>
        <h1 className=" py-5 text-center font-black text-2xl"> Details</h1>
        <div className="hero-content flex-col md:flex-row">
          <img
            src={model?.thumbnail}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{model.name}</h1>
            <p className="py-6">{model.description}</p>

            <p>Category : {model.category}</p>
            <p>Created_at : {model.created_at}</p>
            <p>Created_by : {model.created_by}</p>
            <p>Dawnload : {model.dawnload}</p>
            <hr className=" my-3" />
            <div className=" flex  gap-3">
              <Link
                to={`/updateModels/${model._id}`}
                className="btn btn-primary"
              >
                Update{" "}
              </Link>
              <button onClick={handleDownload} className=" btn btn-info">
                Download
              </button>
              <button onClick={handleDelete} className="btn btn-warning">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
