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

// Dashboards
import DoctorDashboard from "./pages/doctordash/DoctorDashboard";
import NurseDashboard from "./pages/nursedash/NurseDashboard.jsx";

// Booking page
import BookingPage from "./pages/bookingpage/BookingPage.jsx";

// Not Found Page
import NotFound from "./pages/authentication/components/NotFound";
import PatientProfile from "./pages/patientprofile/PatientProfile";
import FindProvider from "./pages/finderspages/FindProvider";
import ProviderProfile from "./pages/providersprofiles/ProviderProfile";

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
          <Route path="/patienthome/:patientid" element={<PatientHome />} />

          {/* Find Provider Pages */}
          <Route
            path="/patienthome/:patientid/findprovider/:role"
            element={<FindProvider />}
          />

          {/* Profiles */}
          <Route
            path="/patienthome/:patientid/findprovider/:role/providerprofile/:providerid"
            element={<ProviderProfile />}
          />
          <Route
            path="/patienthome/:patientid/patientprofile/"
            element={<PatientProfile />}
          />

          {/* Booking */}
          <Route
            path="/patienthome/:patientid/findprovider/:role/providerprofile/:providerid/bookingpage"
            element={<BookingPage />}
          />

          {/* Dashboards */}
          <Route path="/doctordash" element={<DoctorDashboard />} />
          <Route path="/nursedash" element={<NurseDashboard />} />

          {/* Not found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
