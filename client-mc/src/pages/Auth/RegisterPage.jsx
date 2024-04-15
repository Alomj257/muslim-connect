import React from "react";
import Register from "../../components/Auth/Register/Register";
import Navbar from "../../components/Navbar/Navbar";
import SubNav from "../../components/SubNav/SubNav";

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <SubNav />
      <Register />
    </div>
  );
};

export default RegisterPage;
