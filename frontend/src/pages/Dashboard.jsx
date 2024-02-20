/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "../features/dashboard/Chat.jsx";
import Member from "../features/dashboard/MembersDirectory.jsx";
import Messages from "../features/dashboard/Messages.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { logout } from "../services/AuthServices.js";
import { toast } from "react-hot-toast";
import { useState } from 'react';
import WelcomeWindow from "../features/dashboard/WelcomeWindow.jsx";
import Button from "../components/Button.jsx";

function Dashboard() {
  const navigate = useNavigate(); 
  const { currentUser } = useContext(UserContext);
  const [showChat, setshowChat] = useState(false);
  const [show, setShowMember] = useState(false);
  const [showWelcome, setshowWelcome] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const { setCurrentUser } = useContext(UserContext);
  
  const showHideMember = () => {
    setShowMember(!show);
  };
  
  const showHideWelcome = () => {
    setshowWelcome(!showWelcome);
    setShowMember(!show)
    setShowButtons(!showButtons)
  };

  const showHideChat = () => {
    setshowChat(!showChat);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentUser(null);
      navigate("/login", { replace: true });
      toast.success("Logged in successfully");
    } catch (e) {
      console.error("Error during logout:", e);
    }
  };


  return (
    <div>
      {showButtons && (
      <div className="flex justify-center space-x-8">
      <Button onClick={showHideChat}>Post a new message on the public wall</Button>
      <Button onClick={handleLogout}>Log out</Button>
      </div>
      )}
      <div className="flex justify-center h-full max-h-full">
      {showChat && (
      <div className="w-1/2 max-h-[100vh]">
        <Chat 
        userData={currentUser.user} 
        toggleChat={showHideChat}
        visibilityChat={showChat}
        />
      </div>
      )}
      { show && (
      <div className="w-1/2">
        <Member toggleMember={showHideMember} visibility={show}/>
      </div>
      )}
      {showWelcome && (
      <div className="flex justify-center h-full max-h-full items-center">
      <div>
        <WelcomeWindow
          toggleWelcome={showHideWelcome}
          visibilityWelcome={showWelcome}
        />
      </div>
      </div>
      )}
      </div>
    </div>
  );
}

export default Dashboard;
