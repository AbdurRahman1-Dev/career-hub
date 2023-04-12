import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner';
import { MapPinIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { addToLocal } from '../utils/addtolocal';
import toast, { Toaster } from 'react-hot-toast';

const JobDetails = () => {
  
  let data= useLoaderData();
  let {jobid} = useParams();

  let [job,setjob] = useState([]);

  useEffect(()=>{
    let jobDetail = data.find(id => id.id == jobid);
    setjob(jobDetail);
  },[])


  return (
    <div>
      <Banner details={'Job Details'}/>
      <div className='my-container grid grid-cols-6 gap-6 my-6'>
    <div className='col-span-4'>
    <p className='primary-text pb-4'><span className='text-gray-900 font-bold'>Job Description:</span> {job.jobDescription}</p>
        
        <p className='primary-text pb-4'><span className='text-gray-900 font-bold'>job Responsibility:</span> {job.jobResponsibility}</p>

        <p className='primary-text pb-4'><span className='text-gray-900 font-bold'>Educational Requirements:</span> 
        <br />
        {job.educationalRequirements}</p>
        
        <p className='primary-text'><span className='text-gray-900 font-bold'>Experiences:</span>
        <br />
         {job.experiences}</p>
    </div>
    <div className='col-span-2'>
 
    <div className="bg-indigo-100 p-4 rounded-lg">
      <h3 className='text-2xl font-semibold pb-3'>Job Details</h3>
      <hr className='border-gray-300 py-2'/>

      <p className='primary-text'><CurrencyDollarIcon className="h-6 w-6 text-indigo-500 inline-block"/>
      <span className='text-gray-700 font-semibold ps-2'>Salary:</span>  {job.salary}</p>

      <p className='primary-text py-2'><CurrencyDollarIcon className="h-6 w-6 text-indigo-500 inline-block"/>
      <span className='text-gray-700 font-semibold ps-2'>Job Title:</span>  {job.jobTitle}</p>



      <h3 className='text-2xl font-semibold pb-3 py-6'>Contact Information</h3>
      <hr className='border-gray-300 py-2'/>

      <p className='primary-text'><PhoneIcon className="h-6 w-6 text-indigo-500 inline-block"/>
      <span className='text-gray-700 font-semibold ps-2'> Phone:</span>  {job.phone}</p>

      <p className='primary-text py-2'><EnvelopeIcon className="h-6 w-6 text-indigo-500 inline-block"/>
      <span className='text-gray-700 font-semibold ps-2'> E-mail:</span>{job.email}</p>

      <p className='primary-text py-2'><MapPinIcon className="h-6 w-6 text-indigo-500 inline-block"/>
      <span className='text-gray-700 font-semibold ps-2'> Address:</span>{job.location}</p>

    </div>
    <Toaster/>
    <button onClick={() => addToLocal(job)} className='bg-indigo-500 w-full py-3 mt-3 rounded-md text-white font-semibold text-xl'>Apply now</button>
    </div>
      </div>
    </div>
  );
};

export default JobDetails;