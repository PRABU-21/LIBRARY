import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LibraryPage from "./pages/LibraryPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
