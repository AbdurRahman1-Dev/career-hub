import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = ({jobs}) => {
  

 let [someJobs, steJobs] = useState([])

 useEffect(()=>{
   let lowjob = jobs.slice(0,4);
  steJobs(lowjob)
 },[])

 
 let handleJobs = () => {
     steJobs(jobs)
  }
  

  

  return (
    <div>
      <div className='text-center py-6'>
     <h1 className='text-4xl font-semibold'>Featured Jobs</h1>
      <p className='primary-text py-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
     </div>
     <div className='grid md:grid-cols-2 gap-6'>
      {
       someJobs.map(job => {
          return <Job key={job.id} job={job} />
        })
      }
     </div>
     <div className='text-center my-6'>
     <button onClick={handleJobs} className='btn'>Show All</button>
     </div>
    </div>
  );
};

export default Jobs;