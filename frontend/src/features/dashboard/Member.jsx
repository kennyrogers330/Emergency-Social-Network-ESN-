/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import leoImage from "./../../assets/images/leo.jpg";

function Member({ member, status }) {
  return (
    <>
      {member ? (
        <div className={`flex flex-row mt-2`}>
          <img
            className="object-cover h-10 rounded-lg m-2"
            src={leoImage}
            alt="profile"
          />
          <div className="w-full flex justify-between">
            <div className="flex flex-col ml-4">
              <div className="font-bold">{member}</div>
              <div
                className={`font-normal ${
                  status === "offline" ? "text-red-600" : "text-green-600"
                }`}
              >
                {status}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">No users available</div>
      )}
    </>
  );
}
export default Member;
