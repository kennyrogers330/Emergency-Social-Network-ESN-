import group from '../../assets/images/group.jpg';

const Contact = () => {
  return (
    <div className="px-5 py-3">
      <div className="flex py-2 px-2 gap-4 rounded-lg bg-[#E7ECF0]">
        <div className="py-3">
          <img src={group} alt="profile" className="w-10 h-10 rounded-lg" />
        </div>
        <div className="flex flex-1 justify-between">
          <div>
            <p> CMU FSE Community </p>
            <p className="text-[12px] text-opacity-40">12 members</p>
            <div className="gap-1">
              <span className="rounded-xl text-[10px] text-[#6A7FE2] bg-[#D4DBFD] px-2 py-1">
                online
              </span>
              <span className="rounded-xl text-[10px] text-[#DD6B20] bg-[#FEEBC8] px-2 py-1">
                offline
              </span>
            </div>
          </div>
          <div>
            <p className="text-[#EB6060] text-[10px]">12 unread</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
