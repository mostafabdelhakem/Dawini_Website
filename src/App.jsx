import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home Page
import Landing from "./pages/landingpage/Landing";
import OurTeam from "./pages/ourteam/OurTeam";

// Login
import Login from "./pages/authentication/components/Login";

// Switchers
import Switcher from "./pages/authentication/components/Switcher";
import MedicalSwitcher from "./pages/authentication/components/MedicalSwitcher";

// Registrations
import Register from "./pages/authentication/components/Register";
import DoctorRegister from "./pages/authentication/components/DoctorRegister";
import NurseRegister from "./pages/authentication/components/NurseRegister";

// Home pages
import PatientHome from "./pages/patienthome/PatientHome";

<<<<<<< HEAD
=======
// Dashboards
import DoctorDashboard from "./pages/doctordash/DoctorDashboard";
import NurseDashboard from "./pages/nursedash/NurseDashboard.jsx";

>>>>>>> 18d54330d14275420d3a37503458223d974ea361
// Find pages
import FindDoctor from "./pages/finderspages/finddrpage/FindDoctor";
import FindNurse from "./pages/finderspages/findnursepage/FindNurse";
import FindPharmacy from "./pages/finderspages/findpharmacypage/FindPharmacy";

// Profile pages
import DoctorProfile from "./pages/providersprofiles/doctorprofile/DoctorProfile";
import NurseProfile from "./pages/providersprofiles/nurseprofile/NurseProfile";

// Booking page
import BookingPage from "./pages/bookingpage/BookingPage.jsx";

// Not Found Page
import NotFound from "./pages/authentication/components/NotFound";
import PatientProfile from "./pages/patientprofile/PatientProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Landing page */}
          <Route exact path="/" element={<Landing />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/login" element={<Login />} />

          {/* Switchers */}
          <Route path="/switcher" element={<Switcher />} />
          <Route path="/medicalswitcher" element={<MedicalSwitcher />} />

          {/* Registration */}
          <Route path="/patient/register" element={<Register />} />
          <Route path="/doctor/register" element={<DoctorRegister />} />
          <Route path="/nurse/register" element={<NurseRegister />} />

          {/* Patient Home page */}
          <Route path="/patienthome" element={<PatientHome />} />
          <Route path="/patienthome/finddoctor" element={<FindDoctor />} />
          <Route path="/patienthome/findnurse" element={<FindNurse />} />
          <Route path="/patienthome/findpharmacy" element={<FindPharmacy />} />
          <Route
            path="/patienthome/patientprofile"
            element={<PatientProfile />}
          />

          {/* Profiles */}
          <Route
            path="/patienthome/finddoctor/doctorprofile"
            element={<DoctorProfile />}
          />
          <Route
            path="/patienthome/findnurse/nurseprofile"
            element={<NurseProfile />}
          />

          {/* Booking */}
          <Route
            path="/patienthome/finddoctor/doctorprofile/bookingpage"
            element={<BookingPage />}
          />
          <Route
            path="/patienthome/findnurse/nurseprofile/bookingpage"
            element={<BookingPage />}
          />

<<<<<<< HEAD
=======
          {/* Dashboards */}
          <Route path="/doctordash" element={<DoctorDashboard />} />
          <Route path="/nursedash" element={<NurseDashboard />} />

>>>>>>> 18d54330d14275420d3a37503458223d974ea361
          {/* Not found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
