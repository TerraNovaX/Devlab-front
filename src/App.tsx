import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Formations from "./pages/Formations.jsx";
import DropOffDevice from "./pages/DropOffDevice";
import Contact from "./pages/Contact.jsx";
import Concept from "./pages/concept.jsx";
import NavigationMenu from "./components/NavigationMenu.jsx";

function App() {
  return (
    <>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Formations" element={<Formations />} />
          <Route path="/DropOffDevice" element={<DropOffDevice />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Concept" element={<Concept />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
