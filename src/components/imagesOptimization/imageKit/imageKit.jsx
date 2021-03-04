import React, { useState } from 'react';
import { IKImage, IKContext } from 'imagekitio-react';
import styles from './imageKit.module.css';

const ImageKit = () => {
  const unsplashAccessKey = 'gm0C0MBkMldZw_MkfZD-sfopNX0iyrcq-WJ9MOcB1SA';
  const unsplashApiUrl = 'https://api.unsplash.com/search/photos';
  const [images, setImages] = useState(null);
  const [wordQuery, setWordQuery] = useState('');
  const urlEndpoint = 'https://ik.imagekit.io/xrpvo7ohdsp';

  const handleChange = (e) => {
    setWordQuery(e.target.value);
  }

  const getImages = async () => {
    let response = await fetch(`${unsplashApiUrl}?query=${wordQuery}&client_id=${unsplashAccessKey}`);
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    setImages(imagesList);
  }

  const lazyImageFetch = (url, index) => (
    <IKImage
      key={index}
      src={url}
      loading="lazy"
      transformation={[{
        height: 200,
        width: 200
      }]}
      style={{marginBottom: '3%'}}
    />
  );

  return(
    <section className={styles.images_container}>
      <h1 style={{ textAlign: 'center' }}>Cloudinary Image Optimization</h1>
      <div style={{display: 'flex', width: '50%', margin: '0 auto', flexDirection: 'column', marginBottom: '5%'}}>
        <input type="text" value={wordQuery} onChange={handleChange} style={{marginBottom: '3%'}} />
        <button type="button" style={{marginBottom: '5%'}} onClick={getImages}>Cargar imagenes</button>
      </div>
      <h1>Optimization fetch Images</h1>
      { /* Images loaded from unsplash API and optimization process by cloudinary service app*/ }
      <div style={{ display: 'flex', flexFlow: 'row wrap', width: "100%", justifyContent: 'space-between' }}>
        <IKContext urlEndpoint={urlEndpoint} >
          {
            images
            && images.length > 0
            ? images.map((image, index) => lazyImageFetch(image.urls.full, index))
            : null
          }
          <IKImage
            src='https://ik.imagekit.io/xrpvo7ohdsp/dragon-link.png'
            loading="lazy"
            transformation={[{
              height: 500,
              width: 500
            }]}
          />
          <IKImage
            src='https://ik.imagekit.io/xrpvo7ohdsp/dogmatika/dogmatika.jpg'
            loading="lazy"
            transformation={[{
              height: 500,
              width: 500
            }]}
          />
          <IKImage
            src='https://ik.imagekit.io/xrpvo7ohdsp/perfum.png'
          />
        </IKContext>
      </div>
      { /* Images loaded from unsplash API - No optimization */ }
      <h1>Original Fetch Images</h1>
      <div style={{ display: 'flex', flexFlow: 'row wrap', width: "100%", justifyContent: 'space-between' }}>
      {
        images
        && images.length > 0
        ? images.map((image, index) => <img src={image.urls.full} width="300" height="300" key={index} alt="cat" style={{ marginBottom: '3%' }} />)
        : null
      }
      </div>
    </section>
  );
}

export default ImageKit;