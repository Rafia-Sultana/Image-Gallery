import React, { useState } from 'react';
import images from '../../data/images.js';
import Images from './Images.jsx';
import Navbar from './Navbar.jsx';
import AddImage from './AddImage.jsx';

const ImageGallery = () => {
  const [tinyPics, setTinyPics] = useState(images);
  const [selectTinyPics, setSelectTinyPics] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);

  const handleSelectImage = (index) => {
    const isSelected = selectTinyPics.includes(index);
    if (isSelected) {
      const updatedImageStore = selectTinyPics.filter((tiny) => tiny !== index);
      setSelectTinyPics(updatedImageStore);
    } else {
      setSelectTinyPics([...selectTinyPics, index]);
    }
  };

  const handleDeleteImg = () => {
    const updated = tinyPics.filter((tiny, index) => !selectTinyPics.includes(index));
    setTinyPics(updated);
    setSelectTinyPics([]);
  };

  const handleFileChange = (files) => {
    const fileArray = Array.from(files);
    const newImages = fileArray.map((file, index) => {
      const id = tinyPics.length + index + 1;
      const image = URL.createObjectURL(file);
      return { id, image };
    });
    setTinyPics([...tinyPics, ...newImages]);
  };

  const handleDragStart = (index) => {
    setDraggedImage(index);
  };

  const handleDragOver = (index) => {
    if (draggedImage === null) return;
    const imagesCopy = [...tinyPics];
    const dragImage = imagesCopy[draggedImage];
    imagesCopy.splice(draggedImage, 1);
    imagesCopy.splice(index, 0, dragImage);
    setTinyPics(imagesCopy);
    setDraggedImage(index);
  };

  const handleDragEnd = () => {
    setDraggedImage(null);
  };

  return (
    <div className='bg-gray-100 min-h-screen w-screen flex flex-row items-center justify-center md:p-4 lg:p-8 '>
    
    <section className="w-4/6 px-6  sm:w-full bg-white rounded-lg shadow">
      <Navbar selectTinyPics={selectTinyPics} handleDeleteImg={handleDeleteImg} />
   
<hr/>
      <section className='h-full w-full p-6'>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-6 ">
      {tinyPics.map((image, index) => (
        <Images
          key={index}
          image={image}
          index={index}
          selectTinyPics={selectTinyPics}
          setSelectTinyPics={setSelectTinyPics}
          handleSelectImage={handleSelectImage}
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragEnd={handleDragEnd}
        />
      ))}
      <AddImage handleFileChange={handleFileChange} />
    </div>
        </section>
        </section>
    </div>
  );
};

export default ImageGallery;
