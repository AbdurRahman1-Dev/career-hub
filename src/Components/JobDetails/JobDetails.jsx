import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner';

const JobDetails = () => {
  
  let data= useLoaderData();
  let {jobid} = useParams();

  let [job,setjob] = useState([]);

  useEffect(()=>{
    let jobDetail = data.find(id => id.id == jobid);
    setjob(jobDetail);
  },[])

console.log(job);

  return (
    <div>
      <Banner details={'Job Details'}/>
      <h1>{job.id}</h1>
    </div>
  );
};

export default JobDetails;