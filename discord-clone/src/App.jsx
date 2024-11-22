import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup"; // Single import
import Sidebar from "./Sidebar";
import Chat from "./Message";
import ProtectRoute from "./ProtectRoute";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/channel/:channelId" element={<ProtectRoute><Chat /></ProtectRoute>} />
      </Routes>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
