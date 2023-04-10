import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
  let [categories, setCategories] = useState([])

  useEffect(()=> {
    fetch('category.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  console.log(categories);

  return (
    <div className='mt-24'>
     <div className='text-center'>
     <h1 className='text-4xl font-semibold'>Job Category List</h1>
      <p className='primary-text py-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
     </div>
     <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 py-8'>
      {
        categories.map((category, index)=> {
           return <Category key={index} category={category}/>
        })
      }
     </div>
    </div>
  );
};

export default Categories;