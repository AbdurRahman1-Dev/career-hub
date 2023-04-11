import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='my-container md:flex text-center justify-between items-center'>
        <div className="logo">
         <Link to={'/'}> <h2 className='text-4xl font-bold text-zinc-900'>FindYourJob</h2></Link>
        </div>
        <div className="menu">
          <ul className='flex justify-center items-center gap-6 py-3'>
          <li><NavLink className={({isActive}) => (isActive) ? 'active' : 'default'} to={'/'}>Home</NavLink></li>

            <li> <NavLink to='/statistics' className={({isActive}) => (isActive) ? 'active' : 'default' }>Statistics</NavLink></li>
            <li> <NavLink to='/appliedjobs' className={({isActive}) => (isActive) ? 'active' : 'default' }>Applied Jobs</NavLink></li>
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