import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
 let data= useLoaderData()
 console.log(data);
  return (
    <div>
      hello
    </div>
  );
};

export default JobDetails;