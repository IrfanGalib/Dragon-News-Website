import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    
    logOut()
      .then(() => {
        alert("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between pt-8 items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-3 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-3">
        <img
          className="w-12 round]"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary px-9 rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-9 rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
