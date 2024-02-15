import Landing from "./pages/landingpage/Landing";
import OurTeam from "./pages/ourteam/OurTeam";
import Login from "./pages/authentication/components/Login";
import Switcher from "./pages/authentication/components/Switcher";
import Signup from "./pages/authentication/components/Signup";
import Signup2 from "./pages/authentication/components/Signup2";
import NotFound from "./pages/authentication/components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientHome from "./pages/patienthome/PatientHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/login" element={<Login />} />
          <Route path="/switcher" element={<Switcher />} />
          <Route path="patient/signup" element={<Signup />} />
          <Route path="doctor/signup" element={<Signup />} />
          <Route path="nurse/signup" element={<Signup />} />
          <Route path="nutritionist/signup" element={<Signup />} />
          <Route path="signup2" element={<Signup2 />} />
          <Route path="/patienthome" element={<PatientHome />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
