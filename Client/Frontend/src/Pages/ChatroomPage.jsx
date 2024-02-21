import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ChatRoomPage = (props) => {
  const { id } = useParams();
  const { socket } = props;
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const messageRef = useRef();

  const sendMessage = () => {
    if (socket) {
      socket.emit("chatroomMessage", {
        id,
        message: messageRef.current.value,
      });
      messageRef.current.value = "";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }
    if (socket) {
      socket.on("newMessage", (message) => {
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }
    //eslint-disable-next-line
  }, [messages]);

  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        id,
      });
    }

    return () => {
      if (socket) {
        socket.emit("leaveRoom", {
          id,
        });
      }
    };
  }, []);
  return (
    <div className="chatroomPage">
      <div className="chatroomSection">
        <div className="cardHeader">Chatroom Name</div>
        <div className="chatroomContent">
          {messages.map((message, i) => (
            <div key={i} className="message">
              <span
                className={
                  userId === message.userId ? "ownMessage" : "otherMessage"
                }
              >
                {message.name}:
              </span>{" "}
              {message.message}
            </div>
          ))}
        </div>
        <div className="chatroomActions">
          <div>
            <input
              type="text"
              name="message"
              placeholder="Say Something !!"
              ref={messageRef}
            />
          </div>
          <div>
            <button className="join" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomPage;
