import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { FaUserCheck } from "react-icons/fa";

const Navbar = () => {
  const { userInfo, handleSignOut } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  //navlink
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/allModels">All Models</NavLink>
      </li>
      <li>
        <NavLink to="/addModel">Add Models</NavLink>
      </li>
    </>
  );
  // handle log out
  const logOut = () => {
    handleSignOut()
      .then(() => {
        alert("Log Out Seccessfully done!");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //theme = dark/light
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  // console.log(userInfo);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <input
          onChange={(e) => handleTheme(e.target.checked)}
          type="checkbox"
          defaultChecked={localStorage.getItem("theme") === "dark"}
          className="toggle"
        />

        {userInfo?.email ? (
          <div className=" flex gap-2">
            <details className="dropdown dropdown-end">
              <summary className="m-1 btn btn-ghost btn-circle avatar">
                {userInfo?.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={userInfo.photoURL}
                    alt="User Avatar"
                  />
                ) : (
                  <FaUserCheck className="text-2xl text-indigo-500" />
                )}
              </summary>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow w-52 mt-3 z-[1]">
                <p>{userInfo.displayName}</p>
                <p className=" font-thin">{userInfo.email}</p>
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <Link to="/myModel">My Model</Link>
                </li>
                <li>
                  <Link to="/myDownload">My Downloaded</Link>
                </li>
                <li className="">
                  <button onClick={logOut}>
                    <span className="bg-red-500  p-1 rounded-full text-white text-sm">
                      Log Out
                    </span>
                  </button>
                </li>
              </ul>
            </details>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-indigo-500 py-1 px-2 rounded-full text-white text-sm"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
