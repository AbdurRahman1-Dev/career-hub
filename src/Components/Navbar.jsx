import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='my-container md:flex text-center justify-between items-center'>
        <div className="logo">
          <h2 className='text-4xl font-bold text-zinc-900'>FindYourJob</h2>
        </div>
        <div className="menu">
          <ul className='flex justify-center items-center gap-6 md:text-lg text-sm font-semibold py-3'>
           <NavLink to={'/'}> <li>Home</li></NavLink>
            <Link to={'/statistics'}><li>Statistics</li></Link>
            <li>Applied Jobs</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="button">
          {/* <Link to={#}></Link> */}
          <button className='btn'>Apply for Job</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;