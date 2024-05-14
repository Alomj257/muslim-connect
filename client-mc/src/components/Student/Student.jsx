import React, { useState } from "react";
import "./Student.css";
import Profile from "./Profile/Profile";
import Learning from "./ActiveLearning/Learning";
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";
import { useGetAllGigsQuery } from "../../ApiService/GigsService/GigsService";
import {
  useGetAllAuthQuery,
  useGetAuthByIdQuery,
} from "../../ApiService/AuthSlice/AuthSlice";
import { useAuth } from "../../context/AuthContext";

const Student = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const user = useGetAuthByIdQuery(auth?.user?.id);

  const [params, setParams] = useState({
    location: "New York",
    category: "Music",
    priceMin: 100,
    priceMax: 500,
    keywords:
      ArrayToString(user?.data?.intrests, "intrest") +
      ArrayToString(user?.data?.skills, "skill"), // Example keywords
  });
  console.log(user);
  const course = useGetAllGigsQuery();
  const { data: gigs, error, isLoading } = useGetAllGigsQuery(params);
  const consultant = useGetAllAuthQuery();

  return (
    <div className="student-container">
      <div>
        <Profile />
      </div>
      <div className="about-container">
        <div className="big-btn">
          <h4
            style={{
              color: "white",
              margin: "0",
              fontWeight: "600",
              fontSize: "32px",
            }}
          >
            Unlock Exclusive Benefits with Subscription!
          </h4>
          <div>
            <h6 style={{ fontWeight: "400", fontSize: "22px" }}>
              Join Our Community of Dedicated Learners and Experts"
            </h6>
            <button
              onClick={() => navigate("/student/subscription")}
              type="button"
              className="btn btn-success"
              style={{ backgroundColor: "#6FAE9C" }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="act-learning">
          <div className="card">
            <h6>Active Learnings - 2</h6>
          </div>
          {course?.isLoading
            ? "Loading...."
            : course?.isError
            ? "Course fetching error "
            : course?.data?.map((val, index) => (
                <Learning index={index} value={val} />
              ))}
        </div>
        <h2 style={{ marginTop: "4%" }}>Recommendations</h2>
        <div className="card items">
          {consultant?.isLoading ? (
            "Loading...."
          ) : consultant?.isError ? (
            <div className="text-danger text-center w-100">
              Consultant fetching error{" "}
            </div>
          ) : (
            consultant?.data?.map((val, index) => <Item />)
          )}

          {/* <Item />
          <Item /> */}
        </div>
      </div>
    </div>
  );
};

export default Student;

// intrest
const ArrayToString = (arr, key) => {
  let res = "";
  if (Array.isArray(arr)) {
    arr?.forEach((ele) => {
      res += ele[key] ? ele[key] : "";
    });
  }
  return res;
};
