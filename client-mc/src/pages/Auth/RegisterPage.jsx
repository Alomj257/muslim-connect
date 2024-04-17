import React from "react";
import Register from "../../components/Auth/Register/Register";
import Navbar from "../../components/Navbar/Navbar";
import SubNav from "../../components/SubNav/SubNav";

const RegisterPage = () => {
  return (
    <div>
      <Navbar navData={navData} type="auth" />
      <SubNav />
      <Register />
    </div>
  );
};

export default RegisterPage;

const navData = [
  { name: "Découvrir", path: "découvrir" },
  { name: "S'inscrire en tant que consultant", path: "tant-que-consultant" },
  { name: "S'inscrire en tant qu'étudiant", path: "tant-quétudiant" },
  { name: "Connectez-vous", path: "connectez-vous" },
];
