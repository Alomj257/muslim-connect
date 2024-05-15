import React from "react";
import "./ChatList.css";
import { MdSearch } from "react-icons/md";
import Conversation from "./Conversation";
const ChatList = () => {
  return (
    <div className="my-5">
      <div className="border rounded-5 p-1 px-3 d-flex align-items-center gap-2">
        <MdSearch size={30} />
        <input
          type="text"
          className="w-100 border-0"
          placeholder="Search"
          style={{ outline: "none" }}
        />
      </div>
      <div className="conversations  my-4">
        <Conversation active={true} />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation />
      </div>
    </div>
  );
};

export default ChatList;
