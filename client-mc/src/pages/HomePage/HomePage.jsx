import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar navData={navData} type="home" />
    </div>
  );
};

export default HomePage;
const navData = [
  { name: "Découvrir", path: "découvrir" },
  { name: "S'inscrire en tant que consultant", path: "tant-que-consultant" },
  { name: "S'inscrire en tant qu'étudiant", path: "tant-quétudiant" },
  { name: "Connectez-vous", path: "connectez-vous" },
];
