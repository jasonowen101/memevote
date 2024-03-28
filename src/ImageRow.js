import { React } from 'react';

const ImageRow = ({ images }) => {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px', fontSize: '48px' }}> 
      {images.map((image, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <label htmlFor={`checkbox${index + 1}`}>Meme {index + 1}</label>
          <br />
          <img src={image.src} alt={`Meme ${index + 1}`} style={{ width: '300px', height: 'auto', objectFit: 'cover' }} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default ImageRow;
