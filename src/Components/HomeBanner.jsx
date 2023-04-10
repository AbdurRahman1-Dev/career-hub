import React from 'react';

const HomeBanner = () => {
  return (
    <div className='md:flex justify-between items-center pt-24 my-container'>
      <div>
        <h1 className='md:text-5xl text-4xl font-bold leading-tight'>
        One Step <br /> Closer To Your <br /> <span className='primary-color'>
        Dream Job
        </span>
        </h1>
        <p className='primary-text md:w-9/12 py-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className='btn'>Get Started</button>
      </div>
      <div className='hidden md:block'>
        <img src={'Images/man.png'} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;