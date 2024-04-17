import React from "react";
import Consultant from "../../components/Consultant/Consultant";
import DashNav from "../../components/DashNav/DashNav";

const ConsultantPage = () => {
  return (
    <div>
      <DashNav navData={navData} type="consultant" />
      <Consultant />
    </div>
  );
};

export default ConsultantPage;
const navData = [
  { name: "Dashboard", path: "/consultant" },
  { name: "Gigs", path: "/gigs" },
  { name: "Level Overview", path: "/level" },
  { name: "Subscription", path: "/subscription" },
  { name: "Sessions", path: "/sessions" },
];
