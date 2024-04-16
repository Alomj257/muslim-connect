import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Auth/RegisterPage";
import LoginPage from "./pages/Auth/LoginPage";
import { ToastContainer } from "react-toastify";
import StudentPage from "./pages/Student/StudentPage";
import ConsultantPage from "./pages/Consultant/ConsultantPage";
function App() {
  return (
    <>
      {/* <h1 className="">
        <HomePage />
      </h1> */}
      <ToastContainer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/consultant" element={<ConsultantPage />} />
      </Routes>
    </>
  );
}

export default App;
// consult
// lugyxoce@citmo.net
// Shoyebmd424@
// student
// digitix623@etopys.com
// Msamsa424@
