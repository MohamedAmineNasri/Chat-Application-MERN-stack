import React from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const ChatRoomPage = ({ match }) => {
  const chatroomId = match.params.id;
  const socket = io("http://localhost:8000", {
    query: {
      token: localStorage.getItem("token"),
    },
  });

  return <div>ChatRoomPage</div>;
};

export default ChatRoomPage;
