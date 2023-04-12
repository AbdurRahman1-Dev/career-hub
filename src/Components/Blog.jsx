import React from 'react';

const Blog = () => {
  return (
    <div className='my-container grid md:grid-cols-2 gap-4'>
     <div className='hover:shadow-xl p-6 m-2'>
      <h1 className='text-2xl font-semibold text-indigo-500'>When Should You use Context API?</h1>
      <p className='primary-text py-3'>When we need to pass the same data to differet component at any nesting level we use Context API. We use context API to avoid Props Drilling</p>
     </div>

     <div className='hover:shadow-xl p-6 m-2'>
      <h1 className='text-2xl font-semibold text-indigo-500'>what is custom hook?</h1>
      <p className='primary-text py-3'>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. Custom Hooks are a mechanism to reuse stateful logic </p>
     </div>

     <div className='hover:shadow-xl p-6 m-2'>
      <h1 className='text-2xl font-semibold text-indigo-500'>what is useRef?</h1>
      <p className='primary-text py-3'> The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. It accepts one argument as the initial value and returns a reference</p>
     </div>     

     <div className='hover:shadow-xl p-6 m-2'>
      <h1 className='text-2xl font-semibold text-indigo-500'>what is useMemo?</h1>
      <p className='primary-text py-3'> React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
     </div>   
    </div>
  );
};

export default Blog;