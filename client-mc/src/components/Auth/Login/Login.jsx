import React, { useState } from "react";
import "./Login.css";
import login from "../../../assets/auth/login.jpeg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginService } from "../../../ApiService/Auth/Auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const handlechange = (e) => {
    const { name, files, value } = e.target;
    setUser({ ...user, [name]: files ? files[0] : value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginService(user);
      if (data.message) {
        toast.error(data.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="login d-flex ">
      <div className="login-left-side w-100">
        <div className="login-left">
          <h3>Sign In</h3>
          <p>Welcome Back! Please enter your credentials to Login</p>

          <form action="" className="w-100" onSubmit={handlesubmit}>
            <div
              className="d-flex flex-column login-form w-100"
              style={{ rowGap: "20px", padding: "16px 0" }}
            >
              <div className="d-flex flex-column w-100">
                <label htmlFor="Email">Email*</label>
                <input
                  onChange={handlechange}
                  name="email"
                  type="Email"
                  id="Email"
                  className="login-input"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="d-flex flex-column w-100">
                <label htmlFor="password">Password*</label>
                <input
                  onChange={handlechange}
                  type="password"
                  id="password"
                  className="login-input"
                />
              </div>
              <div className="d-flex gap-3 w-100">
                <input
                  onChange={handlechange}
                  style={{ width: "1rem", cursor: "pointer" }}
                  type="checkbox"
                  name="remember"
                  id=""
                />
                <label htmlFor="remember">Remember for 30 days*</label>
              </div>
            </div>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column w-100">
                <button type="submit" className="btn btn-signup">
                  Sign Up
                </button>
              </div>
              <div className="d-flex flex-column w-100">
                <button className="btn btn-google">Sign Up with Google</button>
              </div>
              <div className="text-center">
                Don't hanve any account?{" "}
                <Link
                  to="/register"
                  className="text-decoration-none text-purple fw-bold"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="login-right-side w-100">
        <div className="w-100 position-relative">
          <img src={login} className="consultant-img" alt="login" />
          <div className=" consult-said d-flex flex-column">
            <p>
              “As a consultant on Muslim Connect, I have had the privilege of
              connecting with individuals seeking guidance and knowledge in
              various aspects of Islamic life. I can confidently say that this
              platform has been instrumental in expanding my reach and impact as
              a religious expert.”
            </p>
            <div className="">
              <h3 className="fw-bold">Md Useman</h3>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <span className="fw-bold">Finance consultant</span>
                <small className="text-light">Indonesian</small>
              </div>
              <div>left right ocons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
