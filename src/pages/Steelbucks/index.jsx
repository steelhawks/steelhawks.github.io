import React from 'react';

const SteelbucksPage = () => {
  return (
    <div className='p-24'>
      <h1 className='text-[3em] mt-2 md:mt-2 md:text-[5em] text-center mb-2'>
        Our Menu
      </h1>
      <iframe
        title='Steelbucks Menu'
        className='w-full h-[100vh]'
        src='/media/steelbucks/menu.pdf'
        frameborder='0'
      ></iframe>

      <h1 className="'text-[3em] mt-4 md:mt-6 md:text-[5em] text-center mb-2'">
        Order Now!
      </h1>
      <iframe
        title='Steelbucks'
        className='airtable-embed h-[100vh] w-full bg-background'
        src='https://airtable.com/embed/shr1TRwd910sesIGo?backgroundColor=green'
        frameborder='0'
      />
    </div>
  );
};

export default SteelbucksPage;
