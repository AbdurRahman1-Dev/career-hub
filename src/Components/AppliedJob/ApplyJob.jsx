import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const ApplyJob = ({job}) => {
  return (
    <div className='my-container'>
        <div className='border p-6 rounded-xl md:flex  items-center'>
      <div className='md:w-2/12 bg-gray-100 rounded-lg me-4 py-20 px-10'>
      <img src={job.companyLogo} alt="" />
      </div>

      <div className='justify-self-start md:w-7/12'>
          <h3 className='text-xl font-semibold text-gray-800 py-2'>{job.jobTitle}</h3>
      <p className='primary-text pb-3'>{job.companyName}</p>
      
      <span className='border-indigo-600 border py-2 px-4 font-semibold rounded-md text-indigo-500 me-2'>{job.remoteOrOnsite}</span>

      <span className='border-indigo-600 border py-2 px-4 font-semibold rounded-md text-indigo-500 '>{job.fulltimeOrPartTime}</span>
      <div className='py-4 md:flex gap-12'>

        <p className='primary-text'> <span><MapPinIcon className="h-6 w-6 text-gray-400 inline-block" /></span> {job.location}</p>

        <p className='primary-text'><CurrencyDollarIcon className="h-6 w-6 text-gray-400 inline-block"/> {job.salary}</p>
      </div>
      </div>
      <div className='justify-self-end md:w-3/12'>
      <Link to={`/jobdetails/${job.id}`}><button className='btn'>View Details</button></Link>
      </div>
      </div>
    </div>
  );
};

export default ApplyJob;