import Chat from '../components/dashboard/Chat.jsx';
import Member from '../components/dashboard/MembersDirectory.jsx';
import Messages from '../components/dashboard/Messages.jsx';

function Dashboard() {
  return (
    <div className="flex justify-center px-3 h-full max-h-full">
      <div className="w-1/4 border-r-2">
        <Messages></Messages>
      </div>
      <div className="w-1/2 max-h-[100vh]">
        <Chat />
      </div>
      <div className="w-1/4 border-l-2">
        {' '}
        <Member />
      </div>
    </div>
  );
}

export default Dashboard;
