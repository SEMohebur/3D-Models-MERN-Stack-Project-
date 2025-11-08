import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Register = () => {
  //context data
  const { register, setUserInfo, updateDisplayNameAndPhoto } = use(AuthContext);
  const navigate = useNavigate();

  //form submit and register
  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return alert("password length minimum 6 charecter ");
    }

    register(email, password)
      .then((res) => {
        updateDisplayNameAndPhoto(displayName, photoURL)
          .then(() => {
            alert("Register successfully done!");
            setUserInfo(res.user);
            navigate("/login");
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className=" w-full mx-auto bg-gradient-to-b from-orange-50 to-white">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl  my-5">
        <h2 className=" text-2xl font-bold text-center py-5">Register Now!</h2>
        <form onSubmit={handleRegister}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full rounded-full"
                placeholder="name"
                name="name"
                required
              />

              <label className=" label">Photo</label>
              <input
                type="text"
                className="input w-full rounded-full"
                placeholder="url"
                name="photo"
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full rounded-full"
                placeholder="email"
                name="email"
                required
              />

              <label className="label">Password</label>
              <input
                type="text"
                className="input w-full rounded-full"
                placeholder="password"
                name="password"
                required
              />

              <button className="btn btn-neutral mt-4 rounded-full bg-fuchsia-600 border-none">
                Register
              </button>

              <p className=" m-1">
                Already have an account?{" "}
                <Link to="/login" className=" text-indigo-500">
                  Log In
                </Link>
              </p>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
