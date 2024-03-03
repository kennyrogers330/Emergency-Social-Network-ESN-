/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import Chat from '../features/dashboard/Chat.jsx';
import Messages from '../features/dashboard/Messages.jsx';
import { UserContext } from '../context/UserContext.jsx';
import WelcomeWindow from '../features/dashboard/WelcomeWindow.jsx';
import MembersDirectory from '../features/dashboard/MembersDirectory.jsx';

function Dashboard() {
  const { currentUser } = useContext(UserContext);
  const [show, setShowMember] = useState(false);
  const [showWelcome, setshowWelcome] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const [activeChat, setActiveChat] = useState(null);

  const showHideWelcome = () => {
    setshowWelcome(!showWelcome);
    setShowMember(!show);
    setShowButtons(!showButtons);
  };

  const handleChatSelection = (chatId) => {
    setActiveChat(chatId);
    setshowWelcome(false);
  };

  return (
    <>
      {showWelcome && (
        <div className='flex justify-center h-full max-h-full items-center'>
          <div>
            <WelcomeWindow
              toggleWelcome={showHideWelcome}
              visibilityWelcome={showWelcome}
            />
          </div>
        </div>
      )}

      <div className='flex justify-center h-full max-h-full'>
        <div className='w-1/4 border-r-2'>
          <Messages onChatSelect={handleChatSelection}></Messages>
        </div>
        <div className='w-1/2 max-h-[100vh]'>
          {activeChat ? (
            <Chat userData={currentUser.user} />
          ) : (
            <div className='align-center'>
              <Chat userData={currentUser.user} />
              {/* <ClosedChat/> */}
            </div>
            
          )}
        </div>
        <div className='w-1/4 border-l-2'>
          <MembersDirectory />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
