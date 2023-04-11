import React from 'react';

const Banner = ({details}) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-indigo-400 to-indigo-200 h-40">
      <h1 className='text-3xl font-bold'>{details}</h1>
    </div>
  );
};

export default Banner;