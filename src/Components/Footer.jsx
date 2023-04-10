import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black py-14'>
    <div className='my-container'>
      <div className='grid md:grid-cols-6  items-start gap-6'>
      <div className='col-span-2'>
      <h3 className='text-white text-2xl font-semibold'>Find Your Job</h3>
      <p className='primary-text py-2'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
      <img src={'Images/social.png'} alt="" />
      </div>

      <div>
      <h3 className='text-white text-2xl font-semibold pb-2'>Company</h3>
        <ul className='primary-text'>
          <li>About Us</li>
          <li>Work</li>
          <li>Latest News</li>
          <li>Careers</li>
        </ul>
      </div>

      <div>
      <h3 className='text-white text-2xl font-semibold pb-2'>Product</h3>
        <ul className='primary-text'>
          <li>Prototype</li>
          <li>Plans & Pricing</li>
          <li>Customers</li>
          <li>Integrations</li>
        </ul>
      </div>

      <div>
      <h3 className='text-white text-2xl font-semibold pb-2'>Support</h3>
        <ul className='primary-text'>
          <li>Help Desk</li>
          <li>Sales</li>
          <li>Become a Partner</li>
          <li>Developers</li>
        </ul>
      </div>

      <div>
      <h3 className='text-white text-2xl font-semibold pb-2'>Contact</h3>
        <ul className='primary-text'>
          <li>524 Broadway , NYC</li>
          <li>+1 777 - 978 - 5570</li>
        </ul>
      </div>
    </div>

    <hr className='my-8 border-gray-700' />
    <div className='md:flex justify-between gap-4 text-center'>
      <p className='primary-text'>@2023 CareerHub. All Rights Reserved</p>
      <p className='primary-text'>Powered by Find Your Career</p>
    </div>
    </div>
    </div>
  );
};

export default Footer;