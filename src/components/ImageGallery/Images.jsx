import React, { useState } from 'react';

const Images = ({ index, image, selectTinyPics, setSelectTinyPics, handleSelectImage, onDragStart, onDragOver, onDragEnd }) => {
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const handleDragStart = (e) => {
    setIsBeingDragged(true);
    onDragStart();
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver();
  };

  const handleDragEnd = () => {
    setIsBeingDragged(false);
    onDragEnd();
  };

  return (
    <div
      className={`relative group relative before:content-[''] before:absolute before:h-full before:w-full before:rounded-lg before:transition-colors before:cursor-move
        ${(selectTinyPics.includes(index)) ? 'opacity-100' : 'hover:before:bg-black/50'}
        ${(index === 0) ? 'md:col-span-2 md:row-span-2' : 'col-span-1'}
        ${(isBeingDragged) ? 'border-dashed border-2 border-gray-500 rounded-lg' : ''}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <img
        src={image.image}
        alt={image.id}
        className={`rounded-lg border-2 ${(selectTinyPics.includes(index)) && 'opacity-50'}`}
        onClick={() => handleSelectImage(index)}
      />

      <input
        type='checkbox'
        name={image.id}
        id={image.id}
        className={`absolute top-2 right-2 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer
          ${(selectTinyPics.includes(index)) ? 'opacity-100' : 'opacity-0'}`}
        checked={selectTinyPics.includes(index)}
        onChange={() => handleSelectImage(index)}
      />
    </div>
  );
};

export default Images;
