import Chat from '../components/dashboard/Chat.jsx';
import { toast } from 'react-hot-toast';
import Button from './../components/Button.jsx';
import Input from './../components/Input.jsx';

const notify = () => toast.error('Here is a toaster');

function Dashboard() {
  return (
    <div className="flex justify-center px-3 h-full">
      <div className="w-1/4 border-r-2">
        Messages
        <h1>Start of the project.</h1>
        <Button>Button</Button>
        <Button
          size="large"
          backgroundColor={`bg-colorBluePrimary`}
          hoverBackgroundColor={`bg-red-100`}
          textColor={`text-red-300`}
        >
          Large Button
        </Button>
        <Button size="small">Small Button</Button>
        <Button onClick={notify}>Click to Toast</Button>
        <Input
          label="Label"
          details="details"
          placeholder="Placeholder"
          error="something wrong"
        />
      </div>
      <div className="w-1/2">
        <Chat />
      </div>
      <div className="w-1/4 border-l-2">Group Directory</div>
    </div>
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
