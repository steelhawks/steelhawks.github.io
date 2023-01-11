import React from 'react';
import { robotData } from './data';
import MediaChooser from '../../helpers/MediaChooser';

const RobotPage = () => {
  return (
    <div className='p-10'>
      <h1 className='pageTitle'>Robots</h1>
      {robotData.map((robot, i) => (
        <section key={i}>
          <h2>
            {robot.year} - {robot.name}
          </h2>
          <div className='flex justify-center'>
            <MediaChooser
              type={robot.type}
              images={robot.fileNames}
              video={robot.video}
              location={'robots/' + robot.year}
            />
          </div>
          <p className='md:px-24 lg:px-48 pb-20 flex justify-center'>
            {robot.bio}
          </p>
        </section>
      ))}
    </div>
  );
};

export default RobotPage;
