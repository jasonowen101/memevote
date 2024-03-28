import React from 'react';
import ImageRow from './ImageRow';
import image1 from './resources/image1.jpg';
import image2 from './resources/image2.jpg';
import image3 from './resources/image3.jpg';
import VoteCollector from './VoteCollector';
import Header from './Header';

const App = () => {
  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' }
  ];

  return (
    <div>
      <main>
        <Header />
        <ImageRow images={images} />
        <VoteCollector />
      </main>
    </div>
  );
};

export default App;