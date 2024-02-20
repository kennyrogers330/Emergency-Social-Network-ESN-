import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button.jsx";
import Member from "./Member.jsx";
import { UserContext } from "../../context/UserContext.jsx";
import { logout } from "../../services/AuthServices.js";
import { existingUsers } from "../../services/AuthServices.js";
import { toast } from "react-hot-toast";

function MembersDirectory({ toggleMember, visibility }) {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      setCurrentUser(null);
      toast.success("Logged out successfully");
      navigate("/login", { replace: true });
    } catch (e) {
      console.error("Error during logout:", e);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col flex-grow overflow-auto">
        <div className="py-5 px-5 border-b fixed top-0 w-full bg-white">
          <div className="flex justify-between font-sans">
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
        <div className="ml-3 mt-20 mb-4">
          <div className="flex justify-start font-semibold">
            <div className="mr-2">Group Members</div>
            <div className="mr-2">{existingUsers.citizens.length}</div>
          </div>
          {existingUsers.citizens.map((user) => {
            return <Member member={user.username} status={user.status} />;
          })}
        </div>
      </div>
      <div className="flex-shrink-0">
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}
export default MembersDirectory;
