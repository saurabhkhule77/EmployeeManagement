import "./App.css";
import "../SCSS/custom.css";
import "../CSS/all.min.css";
import "../CSS/fontawesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
