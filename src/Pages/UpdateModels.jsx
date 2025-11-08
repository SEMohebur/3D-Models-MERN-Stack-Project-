import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const UpdateModels = () => {
  const data = useLoaderData();
  const model = data.result;
  const { userInfo } = use(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
    };

    fetch(`https://3d-models-server-sigma.vercel.app/models/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data),
          alert("Update Successfully Done"),
          navigate("/allModels");
      })
      .catch((err) => console.log(err.message));
  };

  console.log(model);

  return (
    <div>
      <div className=" py-5 bg-gradient-to-b from-orange-50 to-white">
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <h2 className=" text-2xl font-bold text-center py-5">Update Model</h2>
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full rounded-full"
                  placeholder="Name"
                  name="name"
                  defaultValue={model.name}
                />
                <label className="label">Category</label>
                <input
                  type="text"
                  className="input w-full rounded-full"
                  placeholder="Category"
                  name="category"
                  defaultValue={model.category}
                />

                <label htmlFor="" className=" label">
                  {" "}
                  Description{" "}
                </label>
                <textarea
                  name="description"
                  defaultValue={model.description}
                  placeholder="Enter Description "
                  className=" border-1 p-2 border-gray-300 h-44 rounded-md"
                />
                <label className=" label">Thumbnail URL</label>
                <input
                  type="text"
                  className="input w-full rounded-full"
                  placeholder="URL:"
                  name="thumbnail"
                  defaultValue={model.thumbnail}
                />
                <button className="btn btn-neutral mt-4 rounded-full bg-fuchsia-600 border-none">
                  Update
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModels;
