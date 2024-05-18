import React, { useState } from "react";
import myimg from "../../../assets/Rectangle 1891.png";
import SearchSvg from "../../../assets/Session/Search_Svg";
import "./Session.css";
import { useGetSessionByUserIdQuery } from "../../../ApiService/SessionSlice/SessionSlice";
import { useAuth } from "../../../context/AuthContext";
import { server } from "../../../ApiService/Axios";
import { useGetGigsByIdQuery } from "../../../ApiService/GigsService/GigsService";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { BsX } from "react-icons/bs";
function Session() {
  const [{ user }] = useAuth();
  const sessions = useGetSessionByUserIdQuery(user?._id);
  return (
    <div style={{ paddingBottom: "5%" }}>
      {/* <DashNav navData={navData} /> */}
      <Head />

      <div style={{ display: "flex", marginLeft: "5%" }}>
        <Type name={"CONSULTATION"} num={"2"} />
        <Type name={"COURSES"} num={"5"} />
      </div>
      <div style={{ padding: "0 5% 0 5%", marginTop: "20px" }}>
        <div
          style={{
            border: "0.5px solid rgba(185, 185, 185, 1)",
            minHeight: "70vh",
          }}
        >
          <table style={{ marginTop: "0" }}>
            <thead>
              <tr>
                <th>CONSULTANT</th>
                <th>GIG</th>
                <th>START DATE</th>
                <th>TOTAL</th>
                <th>STATUS</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions?.isLoading ? (
                "Loading...."
              ) : sessions?.isError ? (
                <div className="text-center text-danger my-2">
                  Sessions Fetching error
                </div>
              ) : (
                sessions?.data?.map((item, index) => (
                  <TableRow item={item} time={item?.time} status={"ACTIV"} />
                ))
              )}
              {/* <TableRow
                name={"Usman Ahmad"}
                gig={"  I will tech the course on Arabic Learning"}
                date={"24th Jan, 2024"}
                time={"3:40 pm"}
                amount={"100$"}
                status={"COMPLETED"}
              />
              <TableRow
                name={"Usman Ahmad"}
                gig={"  I will tech the course on Arabic Learning"}
                date={"24th Jan, 2024"}
                time={"3:40 pm"}
                amount={"100$"}
                status={"CANCELLED"}
              /> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Session;
const Head = () => {
  return (
    <div style={{ paddingTop: "13%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 5% 0 5%",
        }}
      >
        <h1 style={{ fontWeight: "600", fontSize: "50px" }}>Manage Sessions</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "black",
            border: "0.3px solid gray",
            height: "50px",
            padding: "0px 25px 0px 25px",
            boxShadow: "0px 0px 4px 0px rgba(0 0 0 0.25)",
            borderRadius: "100px",
            opacity: "50%",
          }}
        >
          <SearchSvg />
          <input
            type="text"
            placeholder="Search"
            style={{ border: "none", outline: "none", marginLeft: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

const Type = ({ name, num }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <span style={{ display: "flex", marginRight: "20px" }}>
          {name}{" "}
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "rgba(178, 178, 178, 1)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: "5px",
            }}
          >
            {num}
          </div>{" "}
        </span>
      </div>
    </>
  );
};

const TableRow = ({ item, img }) => {
  const user = useGetAuthByIdQuery(item?.consultantId);
  const gig = useGetGigsByIdQuery(item?.gigId);
  const [isAction, setAction] = useState(false);
  return (
    <tr>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: "500",
          fontSize: "16px",
        }}
      >
        <img
          src={user?.data?.profile ? server + user?.data?.profile : img}
          alt=""
          style={{
            height: "40px",
            width: "40px",
            marginRight: "15px",
            borderRadius: "50%",
          }}
        />
        {user?.data?.fistname} {user?.data?.lastname}
      </td>
      <td
        style={{
          color: "rgba(124, 83, 153, 1)",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        {gig?.data?.title}
      </td>
      <td style={{ textAlign: "center" }}>
        <span
          style={{
            display: "block",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          {item?.startDate}
          <span
            style={{
              display: "block",
              fontWeight: "400",
              color: "gray",
            }}
          >
            {item?.time}
          </span>
        </span>
      </td>
      <td style={{ fontWeight: "600", fontSize: "22px" }}>
        {gig?.data?.price}
      </td>
      <td>
        <button
          style={{
            backgroundColor: "rgba(124, 83, 153, 1)",
            color: "white",
            border: "1px solid white",
            padding: "7px 20px 7px 20px",
            borderRadius: "30px",
            width: "150px",
            fontWeight: "500",
            fontSize: "13px",
          }}
        >
          {gig?.data?.status === "progress" ? "Active" : gig?.data?.status}
        </button>
      </td>
      <td className="position-relative ">
        {!isAction ? (
          <span
            onClick={() => setAction(!isAction)}
            style={{ cursor: "pointer" }}
            className="p-2  rounded-circle bg-light"
          >
            <PiDotsThreeOutlineFill size={25} />
          </span>
        ) : (
          <span
            onClick={() => setAction(!isAction)}
            style={{ cursor: "pointer" }}
            className="p-2  rounded-circle bg-light"
          >
            <BsX size={25} />
          </span>
        )}
        <ul
          style={{ listStyle: "none", zIndex: "4" }}
          className={`d-flex threeDot px-0 rounded  flex-column bg-light  threeDot-${
            isAction ? "open" : "close"
          } gap-3 mt-0  left-0 position-absolute`}
        >
          <li className="p-1 px-2 ">Complete</li>
          <li className="p-1 px-2 ">Cancel</li>
          <li className="p-1 px-2 ">Review</li>
        </ul>
      </td>
    </tr>
  );
};
