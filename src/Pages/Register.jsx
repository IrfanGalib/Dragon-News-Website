import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be at least 6 character ");
      return;
    } else {
      setNameError("");
    }
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoUrl, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-2xl font-bold text-center">
            Register your account
          </h1>

          <fieldset className="fieldset space-y-4">
            {/* Your Name */}
            <div>
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input bg-base-200 border-none"
                placeholder="Enter your name"
                required
              />
            </div>

            {nameError && <p className="text-xs text-red-500">{nameError}</p>}

            {/* Your Photo URL */}
            <div>
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photoUrl"
                className="input bg-base-200 border-none"
                placeholder="Enter your photo url"
                required
              />
            </div>

            {/* Your Email*/}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-base-200 border-none"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Your Password */}
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-base-200 border-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <p className="text-center text-sm py-5">
            Already Have an Account?{" "}
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
