import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const DashboardPage = (props) => {
  const [chatrooms, setchatrooms] = useState([]);
  props.socket;
  const getChatrooms = () => {
    axios
      .get("http://localhost:8000/chatroom", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setchatrooms(response.data);
      })
      .catch((err) => {
        // Properly handle errors here
        console.error(err);

        // Use setTimeout correctly
        setTimeout(getChatrooms, 3000);
      });
  };
  useEffect(() => {
    getChatrooms();
  }, []);
  return (
    <div className="card">
      <div className="cardHeader">Chatrooms</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Chatroom Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="Enter Chatroom Name"
          />
        </div>
        <button>Create ChatRoom</button>
      </div>
      <div className="chatrooms">
        {chatrooms.map((chatroom) => (
          <div key={chatroom._id} className="chatroom">
            <div>{chatroom.name}</div>
            <Link to={"/chatroom/" + chatroom._id}>
              <div className="join">Join</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
