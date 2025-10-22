import React, { use, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   ;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-2xl font-bold text-center">Login your account</h1>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email address</label>
            <input
              type="email"
              name="email"
              className="input bg-base-200 border-none"
              placeholder="Enter your email address"
              required
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input bg-base-200 border-none"
              placeholder="Enter your password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

{
  error && <p className="text-red-400 text-xs ">{error}</p>
}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p className="text-center text-sm py-5">
            Don’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
