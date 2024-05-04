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

// Not Found Page
import NotFound from "./pages/authentication/components/NotFound";

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
          <Route path="/doctordash" element={<DoctorDashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
