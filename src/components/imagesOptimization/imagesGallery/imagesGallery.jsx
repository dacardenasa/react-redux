import React, { useState } from 'react';

import styles from './imagesGallery.module.css';

const ImagesGallery = () => {
  const accessKey = 'gm0C0MBkMldZw_MkfZD-sfopNX0iyrcq-WJ9MOcB1SA';
  const apiUrl = 'https://api.unsplash.com/search/photos';
  const [images, setImages] = useState(null);
  const [wordQuery, setWordQuery] = useState('');

  const handleChange = (e) => {
    setWordQuery(e.target.value);
  }

  const getImages = async () => {
    let response = await fetch(`${apiUrl}?query=${wordQuery}&client_id=${accessKey}`);
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
        ? images.map((image, index) => <img key={index} src={image.urls.full} alt={index} style={{ width: '45%', marginBottom: '3%' }} />)
        : null
      }
      </div>
    </section>
  );
}

export default ImagesGallery;