import React from 'react';
import { mentorList } from './data';

const MentorPage = () => {
  return (
    <div>
      <h1 className='pageTitle p-0'>Mentors</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 m-4'>
        {mentorList.map((mentor, i) => (
          <div className='mb-20 px-4' key={i}>
            <h2 className='overflow-hidden'>{mentor.name}</h2>
            <h3 className='text-center pb-2 text-md'>{mentor.title}</h3>
            <div className='self-baseline flex justify-center'>
              <picture>
                <source
                  srcSet={'/media/mentors/avif/' + mentor.fileName + '.avif'}
                  type='image/avif'
                />
                <source
                  srcSet={'/media/mentors/webp/' + mentor.fileName + '.webp'}
                  type='image/webp'
                />
                <source
                  srcSet={'/media/mentors/jpg/' + mentor.fileName + '.jpg'}
                  type='image/jpg'
                />
                <img className='rounded-md' alt={mentor.name} />
              </picture>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MentorPage;
