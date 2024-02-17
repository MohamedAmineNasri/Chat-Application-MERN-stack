import React from "react";
import { useParams } from "react-router-dom";

const ChatRoomPage = (props) => {
  const { id } = useParams(); // Use useParams to get the id parameter
  const { socket } = props;

  return (
    <div className="chatroomPage">
      <div className="chatroomSection">
        <div className="cardHeader">Chatroom Name</div>
        <div className="chatroomContent">
          <div className="message">
            <span className="otherMessage">Amine :</span> Hello
          </div>
          <div className="message">
            <span className="ownMessage">Hadil :</span> nasrouch
          </div>
        </div>
        <div className="chatroomActions">
          <div>
            <input type="text" name="message" placeholder="Say Something !!" />
          </div>
          <div>
            <button className="join">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomPage;
