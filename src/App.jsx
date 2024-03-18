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
import DrPage from "./pages/providerspages/drpage/DrPage";
import NursePage from "./pages/providerspages/nursepage/NursePage";
import PharmacyPage from "./pages/providerspages/pharmacypage/PharmacyPage";

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
          <Route path="/patienthome/drpage" element={<DrPage />} />
          <Route path="/patienthome/nursepage" element={<NursePage />} />
          <Route path="/patienthome/pharmacypage" element={<PharmacyPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
