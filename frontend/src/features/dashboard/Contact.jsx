/* eslint-disable react/prop-types */
import group from '../../assets/images/group.jpg';

const Contact = ({name, isPublic}) => {

  // Function to limit the displayed characters of the name
  const truncateName = (str, maxLen) => {
    return str.length > maxLen ? str.slice(0, maxLen) + '...' : str;
  };

  return (
    <div className="px-5 py-1">
      <div className="flex py-2 px-2 gap-4 rounded-lg bg-[#E7ECF0]">
        <div className="py-3">
          <img src={group} alt="profile" className="w-10 h-10 rounded-lg" />
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col justify-center">
            <p> {truncateName(name, 10)} </p>
            {
              isPublic ? <p className="text-[12px] text-opacity-40">12 members</p>: ''
            }
            
            <div className="gap-1">
              <span className="rounded-xl text-[10px] text-[#6A7FE2] bg-[#D4DBFD] px-2 py-1">
                online
              </span>

              {/* <span className="rounded-xl text-[10px] text-[#DD6B20] bg-[#FEEBC8] px-2 py-1">
                offline
              </span> */}
            </div>
          </div>
          <div>
          {
              isPublic ? <p className="text-[#EB6060] text-[10px]">12 unread</p>: ''
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
