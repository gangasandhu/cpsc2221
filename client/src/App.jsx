import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import AuthPage from './pages/AuthPage';
import ViewPost from './pages/ViewPost';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/ViewPost/:id" element={<ViewPost />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
