/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "../features/dashboard/Chat.jsx";
import Member from "../features/dashboard/MembersDirectory.jsx";
import Messages from "../features/dashboard/Messages.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { logout } from "../services/AuthServices.js";

function Dashboard({ userdata }) {
  // const { setCurrentUser } = useContext(UserContext);
  // const navigate = useNavigate();

  console.log("userdata:", userdata);

  return (
    <div className="flex justify-center h-full max-h-full">
      <div className="w-1/4 border-r-2">
        <Messages></Messages>
      </div>
      <div className="w-1/2 max-h-[100vh]">
        <Chat />
      </div>
      <div className="w-1/4 border-l-2">
        <Member />
      </div>
    </div>
  );
}

export default Dashboard;
