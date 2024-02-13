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
      icon: <GoHome />,
    },
    {
      path: '/dashboard',
      name: 'home',
      icon: <BiSolidMessageAltDots />,
    },
    {
      path: '/dashboard',
      name: 'home',
      icon: <BiSolidMessageAltDots />,
    },

    {
      path: '/dashboard',
      name: 'home',
      icon: <HiOutlineUser />,
    },
  ];
  return (
    <div>
      {menuItems.map((item) => (
        <Link
          to={item.path}
          key={item.path}
          className={`flex px-2 py-2 hover:bg-[#ecffe7]`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
