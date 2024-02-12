import { toast } from 'react-hot-toast';
import Button from './../components/Button.jsx';
import Input from './../components/Input.jsx';

const notify = () => toast.error('Here is a toaster');

function Dashboard() {
  return (
    <>
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
    </>
  );
}

export default Dashboard;
