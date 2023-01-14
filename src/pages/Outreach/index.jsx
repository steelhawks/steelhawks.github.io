import React from 'react';
import { outreachData } from './data';
import MediaChooser from '../../helpers/MediaChooser';
import { motion } from 'framer-motion';

const OutreachPage = () => {
  return (
    <div>
      <h1 className='pageTitle'>Outreach</h1>
      {outreachData.map((outreach, i) => (
        <motion.section
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
        >
          <h2>{outreach.name}</h2>
          <div className='flex justify-center'>
            <MediaChooser
              type={outreach.type}
              images={outreach.fileNames}
              video={outreach.video}
              location={'outreach/' + outreach.fileLocation}
            />
          </div>
          <p className='md:px-24 lg:px-48 pb-20'>{outreach.description}</p>
        </motion.section>
      ))}
    </div>
  );
};

export default OutreachPage;
