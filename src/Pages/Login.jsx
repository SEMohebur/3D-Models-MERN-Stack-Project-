import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  //context data
  const { login } = use(AuthContext);
  const navigate = useNavigate();

  //formSubmit and login
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        alert("Login SUccessfully done!");
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className=" w-full mx-auto bg-gradient-to-b from-orange-50 to-white">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl  my-5">
        <h2 className=" text-2xl font-bold text-center py-5">Login Now!</h2>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full rounded-full"
                placeholder="email"
                name="email"
              />

              <label className="label">Password</label>
              <input
                type="text"
                className="input w-full rounded-full"
                placeholder="password"
                name="password"
              />

              <button className="btn btn-neutral mt-4 rounded-full bg-fuchsia-600 border-none">
                Login
              </button>

              {/* Google */}
              <button className="btn bg-white text-black border-[#e5e5e5] rounded-full shadow">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <p className=" m-1">
                Don't have an account?
                <Link to="/register" className=" text-indigo-500">
                  Register
                </Link>
              </p>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
