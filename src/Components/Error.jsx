import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  let {error, data, status, statusText}= useRouteError()
  console.log(data);
  return (
    <div className='flex justify-center items-center h-screen'>
     <div  className='text-center'>
      <h1 className='text-9xl font-bold primary-color'>{status}</h1>
      <h4 className='text-2xl py-2'>{statusText}</h4>
      <h4 className='text-xl py-2'>{error.message}</h4>
      <Link to={'/'}><button className='btn'>Go to Home Page</button></Link>
     </div>
    </div>
  );
};

export default Error;