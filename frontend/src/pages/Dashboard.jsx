import Member from '../components/Dashboard/MembersDirectory.jsx';
import Messages from '../components/Dashboard/Messages.jsx';
function Dashboard() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-nowrap">
          <div className="basis-1/4 border-2 border-rose-600">
            <Messages></Messages>
          </div>
          <div className="basis-6/12">
            <Member></Member>
          </div>
          <div className="basis-1/4">
            <Member></Member>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
