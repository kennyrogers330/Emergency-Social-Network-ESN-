// /* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import io from 'socket.io-client';

// function ChatUI() {
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState('');
//   let socket = io.connect('http://localhost:8000');

//   const username = window.location.pathname.split('/').pop();
//   socket.emit('joinRoom', username);

//   //   useEffect(() => {
//   //     socket = io.connect('http://localhost:8000');

//   //     return () => {
//   //       socket.disconnect();
//   //     };
//   //   }, []);

//   const sendMessage = () => {
//     // if (messageInput.trim() !== '') {
//     //   // Emit 'chatMessage' event with message data
//     //   socket.emit('chatMessage', { text: messageInput });
//     //   setMessageInput(''); // Clear message input field
//     // }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           height: '300px',
//           overflowY: 'scroll',
//           border: '1px solid #ccc',
//           marginBottom: '10px',
//         }}
//       >
//         {messages.map((message, index) => (
//           <div key={index}>
//             <strong>{message.user}: </strong> {message.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={messageInput}
//         onChange={(e) => setMessageInput(e.target.value)}
//         placeholder="Type your message..."
//         style={{ marginRight: '10px' }}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default ChatUI;
