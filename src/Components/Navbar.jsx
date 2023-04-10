import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='md:flex text-center justify-between items-center'>
        <div className="logo">
          <h2 className='text-4xl font-bold text-zinc-900'>FindYourJob</h2>
        </div>
        <div className="menu">
          <ul className='flex justify-center items-center gap-6 md:text-lg text-sm font-semibold py-3'>
            <li>Home</li>
            <li>Statistics</li>
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