import React from 'react';

const ErrorPage = () => {
  return (
    <div className='bg-bkg text-content flex flex-col items-center justify-center h-screen'>
      <div className='bg-pink-300 p-8 rounded-xl shadow-md '>
        <p className='text-5xl font-bold text-black mb-4'>Error: 404</p>
        <p className='text-3xl font-semibold'>Page Not Found</p>
        <p className='text-lg mt-4 mb-8 text-gray-700'>
          The page you visited has either been moved or does not exist.
        </p>
        <a
          className='bg-pink-500 text-white rounded-full p-4 mt-12 hover:bg-pink-600 transition duration-300'
          href='/'
        >
          Go Back To HomePage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
