import Landing from "./pages/landingpage/Landing";
import OurTeam from "./pages/ourteam/OurTeam";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
