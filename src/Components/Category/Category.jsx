import React from 'react';

const Category = ({category}) => {

  return (
      <div className='primary-bg-color p-10 rounded-lg'>
        <img src={category.logo} alt="" />
        <h3 className='text-xl font-semibold text-gray-700 py-2'>{category.name}</h3>
        <p className='primary-text'>{category.jobs_available} Job is Avaiable</p>
      </div>
  );
};

export default Category;