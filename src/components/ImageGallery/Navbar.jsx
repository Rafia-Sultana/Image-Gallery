import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = ({ handleDeleteImg, selectTinyPics }) => {
  const handleDelete = () => {
  
    toast.error('Deletion completed!', {
      position: 'top-right',
      autoClose: 3000, 
    });
    handleDeleteImg();
  }
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-6">

      <div className="md:flex md:flex-row md:items-center md:gap-x-4">
        {selectTinyPics.length === 0 ? (
          <h1 className="text-2xl font-bold">Gallery</h1>
        ) : (
          <label
            htmlFor="select"
            className="flex flex-row justify-between items-center gap-x-4"
          >
            <input
              type="checkbox"
              name="select"
              id="select"
              checked={selectTinyPics.length > 0}
              className="h-5 w-5 accent-blue-500 cursor-pointer"
              readOnly
            />
            <p className="font-bold text-base font-sans">
              {selectTinyPics.length} Files Selected
            </p>
          </label>
        )}
      </div>

      <div className="mt-2 md:mt-0 lg:mt-0">
        <button className="text-red-500 font-medium" onClick={handleDelete}>
          Delete files
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
