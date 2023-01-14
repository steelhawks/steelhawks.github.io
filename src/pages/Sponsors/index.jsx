import React from 'react';
import { sponsorList, sponsorLevels } from './data';
import { motion } from 'framer-motion';

const SponsorPage = () => {
  return (
    <div className='p-10'>
      <h1 className='pageTitle mb-2'>Sponsors</h1>
      <h2 className='mb-10 md:mb-20 text-2xl md:text-3xl px-10 md:px-24'>
        Thank you sponsors! We are eternally grateful for your support!
      </h2>
      <section className='grid gap-4 grid-cols-3 px-1 md:px-2 place-content-center'>
        {sponsorList.map((sponsor, i) => (
          <motion.div
            className='overflow-hidden'
            key={i}
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: i * 0.1 },
            }}
            viewport={{ once: true }}
          >
            <h2 className='text-base text-center'>{sponsor.name}</h2>
            <div className='overflow-y-hidden h-full flex justify-center items-center pb-10'>
              <a href={sponsor.url}>
                <picture>
                  <source
                    srcSet={
                      '/media/sponsors/avif/' + sponsor.fileName + '.avif'
                    }
                    type='image/avif'
                  />
                  <source
                    srcSet={
                      '/media/sponsors/webp/' + sponsor.fileName + '.webp'
                    }
                    type='image/webp'
                  />
                  <source
                    srcSet={'/media/sponsors/png/' + sponsor.fileName + '.png'}
                    type='image/png'
                  />
                  <img
                    className={
                      'max-w-[420px] max-h-[420px] aspect-auto p-2 w-full rounded-md ' +
                      sponsor.style
                    }
                    alt={sponsor.name}
                  />
                </picture>
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section
        className='pb-10 mb-10 md:mb-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <div>
          <h1 className='pageTitle mb-2 text-3xl md:text-4xl'>
            INTERESTED IN SPONSORING?
          </h1>
          <p>
            We are a non-profit organization, spreading the mission of FIRST and
            promoting STEM to everyone. With your financial support we can
            inspire another child.
          </p>
          <p>
            We spend thousands of dollars building a robot each year, signing up
            for competition, and keeping the team running.
          </p>
        </div>
        <section>
          <h2 className='text-2xl md:text-3xl pt-10 pb-5'>
            Sponsorship Degrees
          </h2>
          {sponsorLevels.map((level, i) => (
            <div className='mb-10' key={i}>
              <div className='flex justify-center'>
                <div>
                  <h2 className='inline mr-2 text-center'>{level.name}</h2>
                  <h3 className='align-baseline inline'>{level.donation}</h3>
                </div>
              </div>
              {level.description.map((point, i) => (
                <div className='text-center' key={i}>
                  <span>-ㅤ{point}</span>
                  <br />
                </div>
              ))}
            </div>
          ))}
        </section>
      </motion.section>
    </div>
  );
};

export default SponsorPage;
