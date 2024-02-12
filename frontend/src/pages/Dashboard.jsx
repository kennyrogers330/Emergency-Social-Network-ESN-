import Button from './../components/Button.jsx';

function Dashboard() {
  return (
    <>
      <h1>Start of the project.</h1>
      <Button>Button</Button>
      <Button variation="secondary" size="large">
        Large Button
      </Button>
      <Button variation="danger" size="small">
        Small Button
      </Button>
    </>
  );
}

export default Dashboard;
