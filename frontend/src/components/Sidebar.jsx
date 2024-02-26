import logo from '../assets/icon/Logo.png';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { IoIosLogOut } from 'react-icons/io';
import { HiOutlineUser } from 'react-icons/hi2';
import { RiShareForwardLine } from 'react-icons/ri';
import React, { useState } from 'react';
import okayImage from '../assets/icon/okay.png';
import helpImage from '../assets/icon/help.png';
import emergencyImage from '../assets/icon/emergency.png';



const statusRules = [
  { label: 'OK', color: 'green', icon: okayImage},
  { label: 'Help', color: 'yellow',icon: helpImage}, 
  { label: 'Emergency', color: 'red' , icon: emergencyImage},
];

const Sidebar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    setDropdownVisible(false);
  };
  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <img src={logo} alt="Icon" />,
    },
    {
      path: '/dashboard',
      name: 'Home',
      icon: <GoHome size={24} />,
    },
    {
      path: '/dashboard',
      name: 'home',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 2H7C4.24 2 2 4.23 2 6.98V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12ZM12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12ZM16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
            fill="#748CF8"
          />
        </svg>
      ),
    },
    {
      path: '/dashboard',
      name: 'home',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 10.74V13.94M12 9V15.68M17 10.74V13.94M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            stroke="#4B5157"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      path: '/dashboard',
      name: 'home',
      icon: <HiOutlineUser size={24} />,
    },

    {
      path: '/dashboard', 
      name: 'home',
      icon:  (
        <div className="relative">
          <RiShareForwardLine size={24} onClick={() => setDropdownVisible(!dropdownVisible)} />
          {dropdownVisible && (
            <div className="absolute top-0 left-10 mt-2 bg-white border border-gray-200 rounded shadow-lg">
              {statusRules.map((rule, index) => (
                <div
                  key={index}
                  className={`p-2 cursor-pointer hover:bg-gray-100 text`}
                  style={{ color: rule.color }} 
                  onClick={() => handleStatusClick(rule.label)}
                >
                  <img src={rule.icon} alt={rule.label} className="w-6 h-6 mr-2" />
                  {rule.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
    


  ];
  return (
    <div className="flex justify-between flex-col">
      <div>
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className="flex justify-center p-3 hover:bg-[#94acf9] "
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div>
        <Link
          to="/logout"
          className={`flex justify-center px-3 pb-5 hover:bg-[#94acf9]  `}
        >
          <IoIosLogOut size={24} path="/logout" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
