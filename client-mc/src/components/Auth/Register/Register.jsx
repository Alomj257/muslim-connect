import React, { useState } from "react";
import "./Register.css";
import { toast } from "react-toastify";
import studentImg from "../../../assets/auth/student.jpeg";
import consultantImg from "../../../assets/auth/login.jpeg";
import { Link } from "react-router-dom";
import { registerUserService } from "../../../ApiService/Auth/Auth";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

const Register = () => {
  const [role, setRole] = useState("STUDENT");
  const [user, setUser] = useState(null);
  const [more, setMore] = useState(false);
  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setUser({ ...user, [name]: files ? files[0] : value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      for (const [name, value] of Object.entries(user)) {
        formdata.append(name, value);
      }
      formdata.append("role", role);
      const { data } = await registerUserService(formdata);
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
    <div className="register" style={{ height: more ? "max-content" : "" }}>
      <div className="register-left-side w-100">
        <div className="register-left py-2">
          <h4>Create New Account</h4>
          <p>
            Welcome! Please enter your asked information to complete the
            Registration Process
          </p>
          <div className="d-flex justify-content-between w-100 register-tabs">
            <button
              onClick={() => setRole("STUDENT")}
              className={`btn  ${
                role === "STUDENT" ? " btn-register-active" : ""
              } w-100`}
            >
              Student
            </button>
            <button
              onClick={() => setRole("CONSULTANT")}
              className={`btn  ${
                role === "CONSULTANT" ? " btn-register-active" : ""
              } btn-register-student w-100`}
            >
              Consultant
            </button>
          </div>
          <form action="" className="w-100" onSubmit={handlesubmit}>
            <div
              className="d-flex flex-column register-form w-100"
              style={{ rowGap: "10px", padding: "10px 0" }}
            >
              <div className="d-flex flex-column w-100">
                <label htmlFor="firstName">First Name*</label>
                <input
                  onChange={handleChange}
                  name="firstname"
                  type="text"
                  className="register-input"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="d-flex flex-column w-100">
                <label htmlFor="lastname">Last Name*</label>
                <input
                  onChange={handleChange}
                  name="lastname"
                  type="text"
                  className="register-input"
                  placeholder="Enter Last Name"
                />
              </div>
              {more && (
                <>
                  <div className="d-flex flex-column w-100">
                    <label htmlFor="Email">Email*</label>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="Email"
                      className="register-input"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="d-flex flex-column w-100">
                    <label htmlFor="firstName">Date Of Birth*</label>
                    <input
                      onChange={handleChange}
                      name="dob"
                      type="date"
                      className="register-input"
                    />
                  </div>
                  <div className="d-flex flex-column w-100">
                    <label htmlFor="firstName">Gender*</label>
                    <div className="d-flex mt-2  justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <label htmlFor="Male">Male</label>
                        <input
                          onChange={handleChange}
                          id="Male"
                          name="gender"
                          value="Male"
                          type="radio"
                        />
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <label htmlFor="Female">Female</label>
                        <input
                          onChange={handleChange}
                          id="Female"
                          name="gender"
                          value="Female"
                          type="radio"
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <label htmlFor="Transgender">Transgender</label>
                        <input
                          onChange={handleChange}
                          id="Transgender"
                          name="gender"
                          value="Transgender"
                          type="radio"
                          placeholder="Enter First Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <label htmlFor="firstName">Phone Number*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="phone"
                      className="register-input"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  {role === "CONSULTANT" && (
                    <div className="d-flex flex-column w-100">
                      <label htmlFor="ident">Certification or Diplomas *</label>
                      <div className="position-relative identity ">
                        <label
                          htmlFor="certificate"
                          className="d-flex flex-column text-center"
                        >
                          <span>icon</span>
                          <span
                            className="fw-bold "
                            style={{ color: "#7C5399" }}
                          >
                            {" "}
                            Click to Upload{" "}
                          </span>
                          <small>SVG,PNG,JPG,or GIF (Max. 800X400)</small>
                        </label>
                        <input
                          onChange={handleChange}
                          name="certificate"
                          type="file"
                          id="certificate"
                          className=" d-none"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                  )}
                  <div className="d-flex flex-column w-100">
                    <label htmlFor="ident">Indentification*</label>
                    <div className="position-relative identity ">
                      <label
                        htmlFor="identify"
                        className="d-flex flex-column text-center"
                      >
                        <span>icon</span>
                        <span className="fw-bold " style={{ color: "#7C5399" }}>
                          {" "}
                          Click to Upload{" "}
                        </span>
                        <small>SVG,PNG,JPG,or GIF (Max. 800X400)</small>
                      </label>
                      <input
                        onChange={handleChange}
                        name="idProof"
                        type="file"
                        id="identify"
                        className=" d-none"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <label htmlFor="firstName">
                      How did you hear about us*
                    </label>
                    <select
                      type="text"
                      name="howhearyou"
                      className="register-input"
                    >
                      <option value="">Select Option</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="career">career page</option>
                      <option value="telegram">Telegram</option>
                    </select>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <label htmlFor="password">Password*</label>
                    <input
                      onChange={handleChange}
                      type="password"
                      name="password"
                      id="password"
                      className="register-input"
                    />
                  </div>
                  <div className="d-flex flex-column w-100">
                    <label htmlFor="password">Confirm Password*</label>
                    <input
                      onChange={handleChange}
                      name="cnfPassword"
                      type="password"
                      id="password"
                      className="register-input"
                    />
                  </div>
                  <div className="d-flex gap-3 w-100">
                    <input
                      onChange={handleChange}
                      style={{ width: "1rem", cursor: "pointer" }}
                      type="checkbox"
                      name="remember"
                      id=""
                    />
                    <label htmlFor="remember">Remember for 30 days*</label>
                  </div>
                </>
              )}
            </div>
            <div className="d-flex flex-column gap-4">
              <>
                {!more ? (
                  <div className="d-flex flex-column w-100">
                    <button
                      type="button"
                      onClick={() => setMore(!more)}
                      className="btn btn-signup"
                    >
                      Sign Up
                    </button>
                  </div>
                ) : (
                  <div className="d-flex flex-column w-100">
                    <button type="submit" className="btn btn-signup">
                      Sign Up
                    </button>
                  </div>
                )}
                <div className="d-flex flex-column w-100">
                  <button className="btn btn-google">
                    Sign Up with Google
                  </button>
                </div>
                <div className="text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none text-purple fw-bold"
                  >
                    Sign In
                  </Link>
                </div>
              </>

              {/* <div className="d-flex flex-column w-100">
                <button
                  onClick={() => setMore(!more)}
                  className="btn btn-signup"
                >
                  {!more ? "Continue" : "less"}
                </button>
              </div> */}
            </div>
          </form>
        </div>
      </div>
      <div className="register-right-side w-100">
        {/*  student */}
        {role === "STUDENT" && (
          <div
            style={{ height: more ? "" : "100vh", zIndex: "1" }}
            className={`w-100 position-relative ${more ? "h-100" : ""}`}
          >
            <img
              src={studentImg}
              className="student-img w-100 h-100"
              alt="register"
            />
            <div
              className={`position-absolute d-flex  ${!more ? "pb-5" : ""} `}
              style={{ inset: "0" }}
            >
              <div
                className={`slide said d-flex flex-column mt-auto ${
                  !more ? "mb-5" : ""
                }  `}
              >
                <p>
                  “As a devout follower seeking religious guidance and
                  knowledge, I couldn't be more pleased with my experience on
                  Muslim Connect. This platform has truly revolutionized the way
                  I connect with religious experts!”
                </p>
                <div className="d-flex justify-content-between alumani-name">
                  <div>Ayesha Siddiqa</div>
                  <div className="d-flex gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="d-flex justify-content-between alumani-location">
                  <small className="text-light">
                    Newly Converted Muslim, Indonesian
                  </small>
                  <div
                    className="d-flex gap-4"
                    style={{ fontWeight: "lighter" }}
                  >
                    <span
                      className="p-2 border rounded-circle"
                      style={{ cursor: "pointer" }}
                    >
                      <FaArrowLeft size={30} />
                    </span>
                    <span
                      className="p-2 border rounded-circle"
                      style={{ cursor: "pointer" }}
                    >
                      <FaArrowRight size={30} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {role === "CONSULTANT" && (
          <div
            style={{ height: more ? "" : "90vh", zIndex: "1" }}
            className={`w-100 position-relative ${more ? "h-100" : ""}`}
          >
            <img
              src={consultantImg}
              className={`consultant-img w-100 h-100 `}
              alt="register"
            />
            <div
              className="position-absolute consult-layer d-flex  "
              style={{ inset: "0" }}
            >
              <div
                className={`slide consult-said d-flex flex-column  mt-auto 
                }  `}
                style={{ marginTop: !more ? "160px" : "" }}
              >
                <p>
                  “As a consultant on Muslim Connect, I have had the privilege
                  of connecting with individuals seeking guidance and knowledge
                  in various aspects of Islamic life. I can confidently say that
                  this platform has been instrumental in expanding my reach and
                  impact as a religious expert.”
                </p>
                <div className="">
                  <h3 className="fw-bold">Md Useman</h3>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <span className="fw-bold">Finance consultant</span>
                    <small className="text-light">Indonesian</small>
                  </div>{" "}
                  <div
                    className="d-flex gap-4"
                    style={{ fontWeight: "lighter" }}
                  >
                    <span
                      className="p-2 border rounded-circle"
                      style={{ cursor: "pointer" }}
                    >
                      <FaArrowLeft size={30} />
                    </span>
                    <span
                      className="p-2 border rounded-circle"
                      style={{ cursor: "pointer" }}
                    >
                      <FaArrowRight size={30} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
