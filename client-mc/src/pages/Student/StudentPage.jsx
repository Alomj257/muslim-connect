import React from "react";
import Student from "../../components/Student/Student";
import DashNav from "../../components/DashNav/DashNav";

const StudentPage = () => {
  return (
    <div>
      <DashNav navData={navData} type="student" />
      <Student />
    </div>
  );
};

export default StudentPage;
const navData = [
  { name: "Dashboard", path: "/student" },
  {
    name: "Learning",
    child: [
      { name: "loyalty Program", path: "/student/learning" },
      { name: "Subscription", path: "/subscription" },
      { name: "Sessions", path: "/sessions" },
    ],
  },
  { name: "loyalty Program", path: "/loyalty" },
  { name: "Subscription", path: "/subscription" },
  { name: "Sessions", path: "/sessions" },
];
