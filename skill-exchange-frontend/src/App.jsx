import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import FindPartner from "./pages/FindPartner";
import Sessions from "./pages/Sessions";
import Resources from "./pages/Resources";
import Test from "./pages/skillTest/Test";
import SelectTest from './pages/skillTest/SelectTest';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/partners" element={<FindPartner />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/resources" element={<Resources />} />
        
        <Route path="/test" element={<Test />} />
        <Route path="/select-test" element={<SelectTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;