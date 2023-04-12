import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon} from '@heroicons/react/24/solid'


const Navbar = () => {
  return (
    <header>
      <nav className='my-container md:flex text-center justify-between items-center'>
        <div className="logo">
         <Link to={'/'}> <h2 className='text-4xl font-bold text-zinc-900'>FindYourJob</h2></Link>
        </div>
        <div className="">
          <ul className='md:flex justify-center items-center gap-6 py-3 hidden md:block'>
          <li><NavLink className={({isActive}) => (isActive) ? 'active' : 'default'} to={'/'}>Home</NavLink></li>

            <li> <NavLink to='/statistics' className={({isActive}) => (isActive) ? 'active' : 'default' }>Statistics</NavLink></li>

            <li> <NavLink to='/appliedjobs' className={({isActive}) => (isActive) ? 'active' : 'default' }>Applied Jobs</NavLink></li> 
            <li> <NavLink to='/blog' className={({isActive}) => (isActive) ? 'active' : 'default' }>Blog</NavLink></li>
          </ul>


          <div className="dropdown   dropdown-bottom dropdown-end md:hidden w-full my-2">
          < Bars3Icon tabIndex={0} className="h-6 w-6 text-indigo-600 inline-block"/>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><NavLink className={({isActive}) => (isActive) ? 'active' : 'default'} to={'/'}>Home</NavLink></li>
          <li> <NavLink to='/statistics' className={({isActive}) => (isActive) ? 'active' : 'default' }>Statistics</NavLink></li>

          <li> <NavLink to='/appliedjobs' className={({isActive}) => (isActive) ? 'active' : 'default' }>Applied Jobs</NavLink></li> 
          <li> <NavLink to='/blog' className={({isActive}) => (isActive) ? 'active' : 'default' }>Blog</NavLink></li>
          </ul>
        </div>

        </div>
        <div className="button">
          <button className='btn'>Apply for Job</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;