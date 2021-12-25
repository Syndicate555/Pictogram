import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../assets/logo-black.png';

const isNotActiveStyle =
 'flex items-center px-5 gap-3 hover:bg-sky-100 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle =
 'flex items-center px-5 gap-3 hover:bg-sky-100 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const categories = [
 {
  name: 'Animals',
  image:
   'https://images.unsplash.com/photo-1640451661517-ec31031d8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
 },
 {
  name: 'Cars',
  image:
   'https://images.unsplash.com/photo-1640451661517-ec31031d8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
 },
 {
  name: 'Nature',
  image:
   'https://images.unsplash.com/photo-1640451661517-ec31031d8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
 },
 {
  name: 'Technology',
  image:
   'https://images.unsplash.com/photo-1640451661517-ec31031d8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
 },
 {
  name: 'Architecture',
  image:
   'https://images.unsplash.com/photo-1640451661517-ec31031d8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
 },
 {
  name: 'Photography',
  image:
   'https://images.unsplash.com/photo-1640451661517-ec31031d8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
 },
 {
  name: 'Travel',
  image:
   'https://images.unsplash.com/photo-1640451661517-ec31031d8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
 },
 {
  name: 'Lifestyle',
  image:
   'https://images.unsplash.com/photo-1640451661517-ec31031d8b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
 },
];
const Sidebar = ({ closeToggle, user }) => {
 const handleCloseSidebar = () => {
  if (closeToggle) closeToggle(false);
 };
 return (
  <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
   <div className='flex flex-col'>
    <Link to='/' className='flex px-5 gap-2 my-6 pt-1 w-190 items-center pr-1.5' onClick={handleCloseSidebar}>
     <img src={logo} alt='logo' className='w-full pl-2' />
    </Link>
    <div className='flex flex-col gap-5'>
     <NavLink
      to='/'
      className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
      onClick={handleCloseSidebar}
     >
      <RiHomeFill />
      Home
     </NavLink>
     <h1 className='mt-2 px-7 text-base xl:text-xl'>Discover cateogries</h1>
     {categories.slice(0, categories.length - 1).map((category) => (
      <NavLink
       to={`/category/${category.name}`}
       className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
       onClick={handleCloseSidebar}
       key={category.name}
      >
       <img src={category.image} className='w-12 h-12 rounded-full shadow-sm' />
       {category.name}
      </NavLink>
     ))}
    </div>
   </div>
   {user && (
    <Link
     to={`user-profile/${user._id}`}
     className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
     onClick={handleCloseSidebar}
    >
     <img src={user.image} className='w-10 h-10 rounded-full' alt='user-profile' />
     <p>{user.userName}</p>
     <IoIosArrowForward />
    </Link>
   )}
  </div>
 );
};

export default Sidebar;
