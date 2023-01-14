import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { sleep } from '../../helpers/time';

const mockImages = [
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxpC7bPQEqkSriarinEXba8FJWlzhc0yK3CZQYuis&s',
];

const Carousel = (props) => {
  const controls = useAnimationControls();
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className='flex justify-center items-center w-full'>
      <button
        className='mr-4'
        onClick={async () => {
          controls.start({
            x: 200,
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          });
          await sleep(200);
          setImageIndex(
            imageIndex - 1 < 0 ? mockImages.length - 1 : imageIndex - 1,
          );
          controls.start({
            x: -200,
          });
          await sleep(100);
          controls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.2 },
          });
        }}
      >
        <ChevronLeftIcon className='w-10 h-10' />
      </button>
      <div
        className={`${
          props.size === 'LARGE'
            ? 'sm:h-[300px] w-[1000px] lg:h-[500px] md:h-[400px] h-[200px]'
            : 'h-[200px] w-[600px] md:h-[300px]'
        }`}
      >
        <picture>
          <source
            srcSet={
              '/media/' +
              props.location +
              '/avif/' +
              props.images[imageIndex] +
              '.avif'
            }
            type='image/avif'
          />
          <source
            srcSet={
              '/media/' +
              props.location +
              '/webp/' +
              props.images[imageIndex] +
              '.webp'
            }
            type='image/webp'
          />
          <source
            srcSet={
              '/media/' +
              props.location +
              '/jpg/' +
              props.images[imageIndex] +
              '.jpg'
            }
            type='image/jpg'
          />
          <motion.img
            className='w-full h-full object-contain'
            animate={controls}
            alt='Home Image'
          />
        </picture>
      </div>
      <button
        className='ml-4'
        onClick={async () => {
          controls.start({
            x: -200,
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          });
          await sleep(200);
          setImageIndex(
            imageIndex + 1 >= mockImages.length ? 0 : imageIndex + 1,
          );
          controls.start({
            x: 200,
          });
          await sleep(100);
          controls.start({
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          });
        }}
      >
        <ChevronRightIcon className='w-10 h-10' />
      </button>
    </div>
  );
};

export default Carousel;
