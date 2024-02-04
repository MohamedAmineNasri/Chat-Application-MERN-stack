import React from "react";

const DashboardPage = () => {
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
        <div className="chatroom">
          <div>Real VS Bara</div>
          <div className="join">Join</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
