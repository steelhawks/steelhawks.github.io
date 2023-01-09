import React from 'react';
import { subteamList } from './subteamData';

const SubteamPage = () => {
  return (
    <div>
      <h1 className='pageTitle'>Subteams</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 m-4'>
        {subteamList.map((subteam, i) => (
          <div className='mb-20' key={i}>
            <h2>{subteam.name}</h2>
            <div className='self-baseline flex justify-center'>
              <picture>
                <source
                  srcSet={'/media/subteams/avif/' + subteam.fileName + '.avif'}
                  type='image/avif'
                />
                <source
                  srcSet={'/media/subteams/webp/' + subteam.fileName + '.webp'}
                  type='image/webp'
                />
                <source
                  srcSet={'/media/subteams/jpg/' + subteam.fileName + '.jpg'}
                  type='image/jpg'
                />
                <img className='rounded-md' alt={subteam.name} />
              </picture>
            </div>
            <p className='px-4 md:px-20'>{subteam.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SubteamPage;
