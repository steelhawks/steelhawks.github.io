import React from 'react';
import awardList from './data';
import { motion } from 'framer-motion';

const AwardPage = () => {
  return (
    <div>
      <h1 className='pageTitle'>Awards</h1>
      <div className='justify-center flex'>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {awardList.map((award, i) => (
            <motion.div
              className='banner'
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: i * 0.05 },
              }}
              viewport={{ once: true }}
            >
              <div className='flex bg-inherit justify-center'>
                <img
                  alt='FIRST Organization Logo'
                  className='bg-inherit mt-2 w-24'
                  src='/media/first_icon.svg'
                />
              </div>
              <p className='bannerText mt-4 italic text-2xl'>{award.name}</p>
              <div className='bannerText px-4 uppercase absolute bottom-[3%] left-0'>
                {award.year} {award.event}
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AwardPage;
