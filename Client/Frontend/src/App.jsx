import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashboardPage";
import IndexPage from "./Pages/indexPage";
import ChatRoomPage from "./Pages/ChatRoomPage";

function App() {
  const [socket, setSocket] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chatroom/:id" element={<ChatRoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
