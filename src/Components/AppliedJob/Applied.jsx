import React, { useEffect, useState } from 'react';
import Banner from '../Banner';

import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ApplyJob from './ApplyJob';
import NotFound from './NotFound';


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
console.log(applyJobs);

  //  let newee = removeDuplicates(jobs)
  return (
    <div>
      <Banner details={'Applied Jobs'}/>


      {getJob &&
        applyJobs.map(job => {
          return <ApplyJob key={job.id} job={job}/>
        } )
      }

    
    </div>
  );
};

export default Applied;