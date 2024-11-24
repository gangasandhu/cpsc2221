import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import ViewPost from "./pages/ViewPost";
import CodePage from "./pages/CodePage";
import ProfilePage from "./pages/ProfilePage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/ViewPost/:id" element={<ViewPost />} />
        <Route path="/codeedit" element={<CodePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/EditPost" element={<EditPost />} />
        <Route path="/EditPost/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
