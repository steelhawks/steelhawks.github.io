import React from 'react';
import MediaChooser from '../../helpers/MediaChooser';
import { news } from './data';

const HomePage = () => {
  return (
    <section className='p-10'>
      <MediaChooser
        title='The Steel Hawks'
        type='carousel'
        images={['home1', 'home2', 'home3']}
        location='home'
      />

      <div>
        {news.map(
          (season, i) =>
            season.year === new Date().getFullYear() - 1 && (
              <div key={i}>
                <h1 className='text-[3em] mt-2 md:mt-2 md:text-[5em] text-center mb-2'>
                  {season.year} Season Recap
                </h1>
                <div>
                  {season.events.map((event, i) => (
                    <div key={i}>
                      <h2 className='text-2xl md:text-4xl mb-2 overflow-hidden text-center'>
                        {event.name}
                      </h2>
                      <div className='flex justify-center'>
                        <img
                          className='max-h-full md:rounded-3xl'
                          alt={event.name + 'pic'}
                          src={event.image}
                        />
                      </div>
                      <p className='flex justify-center'>{event.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>

      <p className='pb-4 text-secondary'>
        Thank you to our sponsors, parents, school communities, and volunteers
        who made this season possible!
      </p>
    </section>
  );
};

export default HomePage;
