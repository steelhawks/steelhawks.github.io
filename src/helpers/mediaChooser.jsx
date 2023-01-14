import React from 'react';
import Carousel from '../components/Carousel';

const MediaChooser = (props) => {
  if (props.type === 'img') {
    return (
      <picture>
        <source
          srcSet={'media/' + props.location + '/avif/' + props.images + '.avif'}
          type='image/avif'
        />
        <source
          srcSet={'media/' + props.location + '/webp/' + props.images + '.webp'}
          type='image/webp'
        />
        <source
          srcSet={'media/' + props.location + '/jpg/' + props.images + '.jpg'}
          type='image/jpg'
        />
        <img className='rounded-lg px-2' alt='' />
      </picture>
    );
  } else if (props.type === 'vid')
    return (
      <iframe
        width='500'
        height='281.25'
        src={props.video}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    );
  else if (props.type === 'carousel') {
    return (
      <>
        <h1 className='text-[3em] mt-2 md:mt-2 md:text-[5em] text-center mb-2'>
          {props.title}
        </h1>
        <Carousel
          images={props.images}
          location={props.location}
          size={props.size}
        />
      </>
    );
  }
};

export default MediaChooser;
