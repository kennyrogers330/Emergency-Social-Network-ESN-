import React from 'react';
import profile from '../../assets/profile.png';
import group from '../../assets/group.jpg';

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
    {
      id: 11,
      senderId: 3,
      message: 'How are you doing',
      createdAt: '12:02',
    },
    {
      id: 12,
      senderId: 1,
      message: 'How are you doing',
      createdAt: '12:02',
    },
    {
      id: 13,
      senderId: 2,
      message: 'How are you doing',
      createdAt: '12:02',
    },
    {
      id: 14,
      senderId: 3,
      message: 'How are you doing',
      createdAt: '12:02',
    },
    {
      id: 15,
      senderId: 1,
      message: 'How are you doing',
      createdAt: '12:02',
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none">
        <div className="w-full flex gap-4 justify-between py-4 px-5 border-b">
          <img src={group} alt="Img" className="w-10 h-10 rounded-lg" />
          <div className="flex-1">
            <p>CMU FSE Community </p> <small> online</small>
          </div>
          <div>Group call</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto chat-messages">
        <div className="flex flex-col justify-end px-5">
          {messages.map((message, index) => (
            <div key={message.id} className="py-3">
              <div
                className={`gap-4 ${
                  message.senderId === user[0].id
                    ? 'flex flex-row-reverse'
                    : 'flex'
                }`}
              >
                <div className="min-w-10 h-10">
                  {index === 0 ||
                  messages[index - 1].senderId !== message.senderId ? (
                    <div>
                      <img
                        src={profile}
                        alt="user"
                        className="min-w-10 h-10 rounded-lg"
                      />
                    </div>
                  ) : null}
                </div>

                <div>
                  <p
                    className={`rounded-xl py-2 px-4 h-[35px] ${
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
      </div>

      <div className="relative flex-none">
        <form>
          <div className="flex p-5 justify-between">
            <div className="flex justify-center align-middle p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.97 12V15.5C11.97 17.43 13.54 19 15.47 19C17.4 19 18.97 17.43 18.97 15.5V10C18.97 6.13 15.84 3 11.97 3C8.09997 3 4.96997 6.13 4.96997 10V16C4.96997 19.31 7.65997 22 10.97 22"
                  stroke="#626B71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              placeholder="Type message"
              className="w-full h-12 p-2 rounded-lg message"
            />
            <div>
              <button
                type="submit"
                className="bg-inherit hover:bg-[#F3F3F3] h-12 absolute right-5 pr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.1401 2.96001L7.11012 5.96001C1.04012 7.99001 1.04012 11.3 7.11012 13.32L9.79012 14.21L10.6801 16.89C12.7001 22.96 16.0201 22.96 18.0401 16.89L21.0501 7.87001C22.3901 3.82001 20.1901 1.61001 16.1401 2.96001ZM16.4601 8.34001L12.6601 12.16C12.5101 12.31 12.3201 12.38 12.1301 12.38C11.9401 12.38 11.7501 12.31 11.6001 12.16C11.4606 12.0189 11.3824 11.8284 11.3824 11.63C11.3824 11.4316 11.4606 11.2412 11.6001 11.1L15.4001 7.28001C15.6901 6.99001 16.1701 6.99001 16.4601 7.28001C16.7501 7.57001 16.7501 8.05001 16.4601 8.34001Z"
                    fill="#748CF8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
