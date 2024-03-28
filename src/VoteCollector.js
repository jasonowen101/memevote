import React, { useState } from 'react';

const VoteCollector = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);

  const handleCheckboxChange = (value) => {
    setSelectedMeme(value);
  };

  return (
    <div style={{ fontSize: '48px' }}>
      <label htmlFor="memeSelection">Which Meme is Best?</label>
      <br />
      <input
        type="checkbox"
        id="meme1"
        name="memeSelection"
        value="Meme 1"
        style={{ zoom: '3' }} // Adjust the zoom property to change the size
        checked={selectedMeme === 'Meme 1'}
        onChange={() => handleCheckboxChange('Meme 1')}
      />
      <label htmlFor="meme1">Meme 1</label>
      <br />
      <input
        type="checkbox"
        id="meme2"
        name="memeSelection"
        value="Meme 2"
        style={{ zoom: '3' }} // Adjust the zoom property to change the size
        checked={selectedMeme === 'Meme 2'}
        onChange={() => handleCheckboxChange('Meme 2')}
      />
      <label htmlFor="meme2">Meme 2</label>
      <br />
      <input
        type="checkbox"
        id="meme3"
        name="memeSelection"
        value="Meme 3"
        style={{ zoom: '3' }} // Adjust the zoom property to change the size
        checked={selectedMeme === 'Meme 3'}
        onChange={() => handleCheckboxChange('Meme 3')}
      />
      <label htmlFor="meme3">Meme 3</label>
    </div>
  );
};

export default VoteCollector;
