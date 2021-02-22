import React, { useState } from 'react';
import Img from 'react-cloudinary-lazy-image'
import { imagesName } from '../../../utils/imagenes';

import styles from './imagesFileResizer.module.css';

const LazyImage = (url, index) => (
  <Img
    key={index}
    cloudName="dacardenasa"
    imageName={url}
    fixed={{
      width: 300,
      height: 300
    }}
    style={{
      marginBottom: '3%',
    }}
    alt={'image'}
  />
)

const ImagesFileResizer = () => {
  const unsplashAccessKey = 'gm0C0MBkMldZw_MkfZD-sfopNX0iyrcq-WJ9MOcB1SA';
  const unsplashApiUrl = 'https://api.unsplash.com/search/photos';
  const [images, setImages] = useState(null);
  const [wordQuery, setWordQuery] = useState('');

  const handleChange = (e) => {
    setWordQuery(e.target.value);
  }

  const getImages = async () => {
    let response = await fetch(`${unsplashApiUrl}?query=${wordQuery}&client_id=${unsplashAccessKey}`);
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    setImages(imagesList);
  }

  return(
    <section className={styles.images_container}>
      <div style={{display: 'flex', width: '50%', margin: '0 auto', flexDirection: 'column', marginBottom: '5%'}}>
        <input type="text" value={wordQuery} onChange={handleChange} style={{marginBottom: '3%'}} />
        <button type="button" style={{marginBottom: '5%'}} onClick={getImages}>Cargar imagenes</button>
      </div>
      <div style={{ display: 'flex', flexFlow: 'row wrap', width: "100%", justifyContent: 'space-between' }}>
      {
        images
        && images.length > 0
        ? images.map((image, index) => LazyImage(image.urls.full, index))
        : null
      }
      </div>
      <div style={{ display: 'flex', flexFlow: 'row wrap', width: "100%", justifyContent: 'space-between' }}>
      {
        imagesName.map((imageName, index) => LazyImage(imageName.url, index))
      }
      </div>
    </section>
  );
}

export default ImagesFileResizer;