import React, { useState } from 'react';
import Categories from './Category/Categories';
import HomeBanner from './HomeBanner';
import Jobs from './FeaturedJobs/Jobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  let jobs = useLoaderData()
  return (
   <div className='my-container'>
    <HomeBanner/>
    <Categories/>
    <Jobs jobs={jobs}/>
   </div>
  );
};

export default Home;