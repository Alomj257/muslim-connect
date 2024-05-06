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
import GigsView from "./components/Student/GigsView/GigsView";
import BookConsultant from "./components/Student/BookConsultant/BookConsultant";
import PaymentPage from "./components/Student/PaymentPage/PaymentPage";
import AddCard from "./components/Student/AddCard/AddCard";
import LevelOverview from "./components/Student/LevelOverview/LevelOverview";
import Subscription from "./components/Student/Subscription/Subscription";
import Sessions from "./components/Student/Sessions/Sessions";
import StudentHome from "./pages/Student/StudentHome";
import GigsPage from "./pages/Consultant/GigsPage";
import ConsultantHome from "./pages/Consultant/ConsultantHome";
import CreateGigsPage from "./pages/Consultant/Gigs/CreateGigsPage";
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
        <Route path="/student-register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* student */}
        <Route path="/student" element={<StudentPage />}>
          <Route path="" element={<StudentHome />} />
          <Route path="loyalty" element={<LevelOverview />} />
          <Route path="learning" element={<ConsultantList />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="sessions" element={<Sessions />} />
        </Route>

        <Route path="/student/gigsview" element={<GigsView />} />
        <Route path="/student/book" element={<BookConsultant />} />
        <Route path="/student/payment" element={<PaymentPage />} />
        <Route path="/student/addcard" element={<AddCard />} />
        {/* consultant */}
        <Route path="/découvrir" element={<SuccessSectionPage />} />
        <Route path="/consultant" element={<ConsultantPage />}>
          <Route path="" element={<ConsultantHome />} />
          <Route path="gigs/create-gigs" element={<CreateGigsPage />} />
          <Route path="gigs" element={<GigsPage />} />
        </Route>
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
