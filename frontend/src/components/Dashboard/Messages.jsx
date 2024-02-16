import Input from '../Input.jsx';
import Contact from './Contact.jsx';

function Messages() {
  return (
    <>
      <div className="flex flex-col">
        <div className="py-5 px-5 border-b">
          <div className="flex justify-between font-sans">
            <div className="flex font-semibold text-sm">
              <span className="font-bold">Messages</span>
              <span className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
              <span className="text-sm">12</span>
            </div>
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-colorBluePrimary"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-5 py-4">
          <Input className="bg=[#F3F3F3]" placeholder="Search messages" />
        </div>
        <Contact />
      </div>
    </>
  );
}
export default Messages;
