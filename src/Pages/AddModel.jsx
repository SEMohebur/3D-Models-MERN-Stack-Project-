import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useNavigate } from "react-router";

const AddModel = () => {
  const { userInfo } = use(AuthContext);
  const navigate = useNavigate();
  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
      created_at: new Date(),
      downloads: 0,
      created_by: userInfo?.email,
    };

    fetch("https://3d-models-server-sigma.vercel.app/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data), navigate("/allModels");
      })
      .catch((err) => console.log(err.message));
  };
  // console.log(userInfo);
  return (
    <div>
      <div className=" py-5 bg-gradient-to-b from-orange-50 to-white">
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <h2 className=" text-2xl font-bold text-center py-5">
            Add New Model
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full rounded-full"
                  placeholder="Name"
                  name="name"
                />
                <label className="label">Category</label>
                <input
                  type="text"
                  className="input w-full rounded-full"
                  placeholder="Category"
                  name="category"
                />

                <label htmlFor="" className=" label">
                  {" "}
                  Description{" "}
                </label>
                <textarea
                  name="description"
                  placeholder="Enter Description "
                  className=" border-1 p-2 border-gray-300 h-44 rounded-md"
                />
                <label className=" label">Thumbnail URL</label>
                <input
                  type="text"
                  className="input w-full rounded-full"
                  placeholder="URL:"
                  name="thumbnail"
                />
                <button className="btn btn-neutral mt-4 rounded-full bg-fuchsia-600 border-none">
                  Add
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
