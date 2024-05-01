import { Route, Routes } from "react-router-dom";
import "./App.css";
// import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Auth/RegisterPage";
import LoginPage from "./pages/Auth/LoginPage";
import { ToastContainer } from "react-toastify";
import StudentPage from "./pages/Student/StudentPage";
import ConsultantPage from "./pages/Consultant/ConsultantPage";
import HomePage from "./pages/HomePage/HomePage";
import SuccessSectionPage from "./pages/SuccessSectionPage/SuccessSectionPage";
import ConsultantList from "./components/Student/ConsultantList/ConsultantList";
import Gigs from "./components/Consultant/Gigs/Gigs";
import GigsView from "./components/Student/GigsView/GigsView";
import BookConsultant from "./components/Student/BookConsultant/BookConsultant";
import PaymentPage from "./components/Student/PaymentPage/PaymentPage";
import AddCard from "./components/Student/AddCard/AddCard";
import LevelOverview from "./components/Student/LevelOverview/LevelOverview";
import Subscription from "./components/Student/Subscription/Subscription";
import Sessions from "./components/Student/Sessions/Sessions";
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
        <Route path="/découvrir" element={<SuccessSectionPage/>} />
        <Route path="/consultant/gigs" element={<Gigs />} />
        <Route path="/student/learning" element={<ConsultantList />} />
        <Route path="/student/gigsview" element={<GigsView />} />
        <Route path="/student/book" element={<BookConsultant />} />
        <Route path="/student/payment" element={<PaymentPage />} />
        <Route path="/student/addcard" element={<AddCard />} />
        <Route path="/student/loyaltyprogram" element={<LevelOverview />} />
        <Route path="/student/subscription" element={<Subscription />} />
        <Route path="/student/sessions" element={<Sessions />} />
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
