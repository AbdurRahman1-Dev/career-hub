import React, { useEffect, useState } from 'react';
import Banner from '../Banner';
import ApplyJob from './ApplyJob';
import NotFound from './NotFound';
import { ChevronDownIcon} from '@heroicons/react/24/solid'


let getJob =  localStorage.getItem('AllJobs')
let jobs = JSON.parse(getJob)

const Applied = () => {

let [applyJobs, setApplyJobs] = useState([])

useEffect(()=>{
const uniqueIds = [];

  const unique = jobs.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id);
  
  if (!isDuplicate) {
    uniqueIds.push(element.id);
    return true;
  }
  return false;
  });

  setApplyJobs(unique)
},[])


let jobFilter = applyJobs.filter(job => {
  return job.remoteOrOnsite === "Remote";
})

let jobFilter2 = applyJobs.filter(job => {
  return job.remoteOrOnsite === "Onsite";
})

const handleRemote = () => {
  setApplyJobs(jobFilter)
}
const handleOnsite = () => {
  setApplyJobs(jobFilter2)
}

{
  return (
    <div>
      <Banner details={'Applied Jobs'}/>

      <div className=' my-container'>
        <div className='text-end mt-8 me-16'>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">Filter By <ChevronDownIcon className="h-6 w-6 text-white inline-block"/> </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
           <button onClick={handleRemote}> <li><a>Remote</a></li></button>
           <button onClick={handleOnsite}> <li><a>Onsite</a></li></button>
            
          </ul>
</div>
        </div>
    
      {getJob &&
        applyJobs.map(job => {
          return <ApplyJob key={job.id} job={job}/>
        })
      } 

      {/* {
        getJob || <NotFound/>
      }   
       */}
        </div>
    </div>
  );
}

};

export default Applied;