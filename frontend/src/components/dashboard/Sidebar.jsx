import React from 'react';
import logo from '../../assets/icon/Logo.png';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { BiSolidMessageAltDots } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi2';

const Sidebar = () => {
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
      icon: <BiSolidMessageAltDots size={24} color="blue" />,
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
  ];
  return (
    <div>
      {menuItems.map((item) => (
        <Link
          to={item.path}
          key={item.path}
          className={`flex justify-center p-3 hover:bg-[#94acf9]  `}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
