import React from 'react';
import Categories from './Category/Categories';
import HomeBanner from './HomeBanner';

const Home = () => {
  return (
   <div className='my-container'>
    <HomeBanner/>
    <Categories/>
   </div>
  );
};

export default Home;