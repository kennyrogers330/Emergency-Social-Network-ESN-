import React from 'react';
import profile from '../../assets/profile.png';
import group from '../../assets/group.jpg';
import { TbSend } from 'react-icons/tb';

const Chat = () => {
  const user = [{ id: 1 }];
  const messages = [
    {
      id: 1,
      senderId: 1,
      message: 'Hello',
      createdAt: '12:02',
    },
    {
      id: 2,
      senderId: 2,
      message: 'Hey',
      createdAt: '12:03',
    },
    {
      id: 3,
      senderId: 1,
      message: 'Hello',
      createdAt: '12:02',
    },
    {
      id: 4,
      senderId: 2,
      message: 'Hello',
      createdAt: '12:02',
    },
    {
      id: 5,
      senderId: 3,
      message: 'Hello',
      createdAt: '12:02',
    },
    {
      id: 6,
      senderId: 3,
      message: 'How are you doing',
      createdAt: '12:02',
    },
    {
      id: 7,
      senderId: 1,
      message: 'Good',
      createdAt: '12:02',
    },
    {
      id: 8,
      senderId: 1,
      message: 'Good',
      createdAt: '12:02',
    },
    {
      id: 9,
      senderId: 1,
      name: 'Kim',
      message: 'Good',
      createdAt: '12:02',
    },
    {
      id: 10,
      senderId: 1,
      name: 'Kim',
      message: 'Good',
      createdAt: '12:02',
    },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <div className=" w-full flex  gap-4 justify-between py-4 px-5 border-b">
        <img src={group} alt="Img" className="w-10 h-10 rounded-lg" />
        <div className="flex-1 ">
          <p>CMU FSE Community </p> <small> online</small>
        </div>
        <div>Group call</div>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col justify-end pb-10 px-5 chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="py-3">
            <div
              className={`gap-4 ${
                message.senderId === user[0].id
                  ? 'flex flex-row-reverse'
                  : 'flex'
              }`}
            >
              <div>
                <img
                  src={profile}
                  alt="user"
                  className="min-w-10 h-10 rounded-lg"
                />
              </div>

              <div>
                <p
                  className={` rounded-xl py-2 px-4 ${
                    message.senderId === user[0].id
                      ? 'bg-[#748CF8]'
                      : 'bg-[#F3F3F3]'
                  }`}
                >
                  {message.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <form>
          <div className="flex p-5">
            <input
              placeholder="Type message"
              className=" w-full h-12 p-2 rounded-lg message"
            />
            <div>
              <button
                type="submit"
                className="bg-inherit hover:bg-[#F3F3F3] h-12 absolute bottom-6 right-5 pr-5"
              >
                <TbSend className="h-6 w-6" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
