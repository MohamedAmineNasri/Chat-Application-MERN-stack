import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashboardPage";
import IndexPage from "./Pages/indexPage";
import ChatRoomPage from "./Pages/ChatRoomPage";
import io from "socket.io-client";
import makeToast from "./Toaster";

function App() {
  const [socket, setSocket] = useState(null);
  const setupSocket = () => {
    const token = localStorage.getItem("token");
    if (token && token.length > 0 && !socket) {
      const newsocket = io("http://localhost:8000", {
        query: {
          token: localStorage.getItem("token"),
        },
      });

      newsocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setSocket, 3000);
        makeToast("error", "Disconnected !");
      });
      newsocket.on("connect", () => {
        makeToast("success", "Connected !");
      });

      setSocket(newsocket);
    }
  };

  useEffect(() => {
    setupSocket();
  }, []); // Added dependency array to run the effect only once on mount

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route
          path="/login"
          element={<LoginPage />}
          setupSocket={setupSocket}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage socket={socket} />} />
        <Route
          path="/chatroom/:id"
          element={<ChatRoomPage socket={socket} />} // Pass the socket prop here
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
