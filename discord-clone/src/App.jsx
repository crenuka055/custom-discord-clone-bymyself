import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Chat from "./Message";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/channel/:channelId" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
