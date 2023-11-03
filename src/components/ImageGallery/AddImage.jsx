import React, { useRef } from 'react';
import { BsImage } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddImage = ({ handleFileChange }) => {
  const fileInputRef = useRef();

  const handleDivClick = () => {
  fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const files = e.target.files;
    handleFileChange(files);

    toast.success('Added Successfully!', {
      position: 'top-right',
      autoClose: 3000, 
    });
  };

  return (
    <div
      className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors ease-linear cursor-pointer"
      onClick={handleDivClick}
    >
      <input
        type="file"
        multiple
        className="hidden"
        onChange={handleInputChange}
        accept="image/*"
        ref={fileInputRef} 
      />
      <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
        <BsImage size={20} />
        <span className="whitespace-nowrap px-4">Add Images</span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddImage;
