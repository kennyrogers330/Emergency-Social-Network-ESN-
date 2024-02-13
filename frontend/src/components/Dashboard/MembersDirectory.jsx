import Member from './Member.jsx';
function MembersDirectory() {
  return (
    <>
      <div className="flex flex-col">
        <div className="p-2">
          <div className="flex justify-between font-sans m-2">
            <div>Group Directory</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-colorGreyInput"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mb-4"></hr>
        <div className="ml-3">
          <div className="flex justify-start font-semibold">
            <div className="mr-2">Group Members</div>

            <div className="mr-2">12</div>
          </div>
          <Member />
        </div>
      </div>
    </>
  );
}
export default MembersDirectory;
