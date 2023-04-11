import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Job = ({job}) => {
  // let navigate = useNavigate()
  // navigate('/jobdetails')
 
  return (
    <div>
      <div className='border p-6 rounded-xl'>
      <img src={job.companyLogo} alt="" />

      <h3 className='text-xl font-semibold text-gray-800 py-2'>{job.jobTitle}</h3>
      <p className='primary-text pb-3'>{job.companyName}</p>
      
      <span className='border-indigo-600 border py-2 px-4 font-semibold rounded-md text-indigo-500 me-2'>{job.remoteOrOnsite}</span>

      <span className='border-indigo-600 border py-2 px-4 font-semibold rounded-md text-indigo-500 '>{job.fulltimeOrPartTime}</span>
      <div className='py-4 md:flex gap-12'>

        <p className='primary-text'> <span><MapPinIcon className="h-6 w-6 text-gray-400 inline-block" /></span> {job.location}</p>

        <p className='primary-text'><CurrencyDollarIcon className="h-6 w-6 text-gray-400 inline-block"/> {job.salary}</p>
      </div>
      <Link to={'jobdetails/3'}><button className='btn'>View Details</button></Link>
      </div>
    </div>
  );
};

export default Job;