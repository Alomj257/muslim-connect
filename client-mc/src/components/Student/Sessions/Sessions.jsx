import React from "react";
import DashNav from "../../DashNav/DashNav";
import myimg from "../../../assets/Rectangle 1891.png";
import SearchSvg from "../../../assets/Session/Search_Svg";
import "./Session.css";
function Session() {
  return (
    <div style={{ paddingBottom: "5%" }}>
      <DashNav navData={navData} />
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
              </tr>
            </thead>
            <tbody>
              <TableRow
                name={"Usman Ahmad"}
                gig={"  I will tech the course on Arabic Learning"}
                date={"24th Jan, 2024"}
                time={"3:40 pm"}
                amount={"100$"}
                status={"ACTIVE"}
              />
              <TableRow
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
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Session;

const navData = [
  { name: "Dashboard", path: "/student" },
  {
    name: "Learning",
    child: [
      { name: "loyalty Program", path: "/loyalty" },
      { name: "Subscription", path: "/subscription" },
      { name: "Sessions", path: "/sessions" },
    ],
  },
  { name: "loyalty Program", path: "/loyalty" },
  { name: "Subscription", path: "/subscription" },
  { name: "Sessions", path: "/sessions" },
];

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

const TableRow = ({ name, gig, date, time, amount, status }) => {
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
          src={myimg}
          alt=""
          style={{
            height: "40px",
            width: "40px",
            marginRight: "15px",
            borderRadius: "50%",
          }}
        />
        {name}
      </td>
      <td
        style={{
          color: "rgba(124, 83, 153, 1)",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        {gig}
      </td>
      <td style={{ textAlign: "center" }}>
        <span
          style={{
            display: "block",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          {date}
          <span
            style={{
              display: "block",
              fontWeight: "400",
              color: "gray",
            }}
          >
            {time}
          </span>
        </span>
      </td>
      <td style={{ fontWeight: "600", fontSize: "22px" }}>{amount}</td>
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
          {status}
        </button>
      </td>
    </tr>
  );
};
