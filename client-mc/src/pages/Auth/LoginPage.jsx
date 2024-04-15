import React from "react";
import Login from "../../components/Auth/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import SubNav from "../../components/SubNav/SubNav";

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <SubNav />
      <Login />
    </div>
  );
};

export default LoginPage;
