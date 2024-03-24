import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landingpage/Landing";
import OurTeam from "./pages/ourteam/OurTeam";
import Login from "./pages/authentication/components/Login";
import Switcher from "./pages/authentication/components/Switcher";
import MedicalSwitcher from "./pages/authentication/components/MedicalSwitcher";
import Register from "./pages/authentication/components/Register";
import DoctorRegister from "./pages/authentication/components/DoctorRegister";
import NurseRegister from "./pages/authentication/components/NurseRegister";
import PatientHome from "./pages/patienthome/PatientHome";
import NotFound from "./pages/authentication/components/NotFound";
import FindDoctor from "./pages/finderspages/finddrpage/FindDoctor";
import FindNurse from "./pages/finderspages/findnursepage/FindNurse";
import FindPharmacy from "./pages/finderspages/findpharmacypage/FindPharmacy";
import DoctorProfile from "./pages/providersprofiles/doctorprofile/DoctorProfile";
import NurseProfile from "./pages/providersprofiles/nurseprofile/NurseProfile";
import BookingPage from "./pages/bookingpage/BookingPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/login" element={<Login />} />
          <Route path="/switcher" element={<Switcher />} />
          <Route path="/medicalswitcher" element={<MedicalSwitcher />} />
          <Route path="/patient/register" element={<Register />} />
          <Route path="/doctor/register" element={<DoctorRegister />} />
          <Route path="/nurse/register" element={<NurseRegister />} />
          <Route path="/patienthome" element={<PatientHome />} />
          <Route path="/patienthome/finddoctor" element={<FindDoctor />} />
          <Route path="/patienthome/findnurse" element={<FindNurse />} />
          <Route path="/patienthome/findpharmacy" element={<FindPharmacy />} />
          <Route
            path="/patienthome/finddoctor/doctorprofile"
            element={<DoctorProfile />}
          />
          <Route
            path="/patienthome/findnurse/nurseprofile"
            element={<NurseProfile />}
          />
          <Route
            path="/patienthome/finddoctor/doctorprofile/bookingpage"
            element={<BookingPage />}
          />
          <Route
            path="/patienthome/findnurse/nurseprofile/bookingpage"
            element={<BookingPage />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
