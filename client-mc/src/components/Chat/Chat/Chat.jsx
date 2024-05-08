import React from "react";
import ChatList from "../ChatList/ChatList";
import "./Chat.css";
import ChatBox from "../ChatBox/ChatBox";
import RightSideProfile from "../RightSideProfile/RightSideProfile";

const Chat = () => {
  return (
    <div className="chat position-relative" style={{ top: "18vh" }}>
      <div className="container ">
        <div className="row">
          <div className="col-3">
            <ChatList />
          </div>
          <div className="col-6">
            <ChatBox />
          </div>
          <div className="col-3">
            <RightSideProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
