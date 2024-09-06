import React, { useState, useEffect } from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import IMG from "../../src/assets/vinod.jpg";
import axios from 'axios';
import ImageUpload from './ImageUpload';

const Post = () => {


  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [content, setContent] = useState("");


  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleImageUpload = (event) => {     
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setPreview(reader.result);
    };
    setImage(file);
  }

  const postSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "upload_from_react_app");
      formData.append("folder", "react_app_uploadation");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/prajapatiautomobiles/image/upload",
        formData
      );
      console.log(response.data.secure_url);
      setPreview(null);
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className='bg-black overflow-auto pt-8'>
      <div className='border-b'>




        <div className='px-8 grid grid-cols-12 py-4'>
          <div className=''>
            <Link to="/profile"><img className='w-[40px] rounded-full' src={IMG} alt="" /></Link>
          </div>
          <div className='col-span-11'>
            <input
              className='bg-black text-white text-[1rem] outline-none placeholder:text-gray-400  w-[100%]'
              placeholder='What id happening ?'
              type="text"
              value={content}
              name="content"
              onChange={(e) => handleChange(e)}
            />
            <div className='my-2 rounded-lg'>
            </div>
            <div className='flex gap-x-8 pt-4'>
            <div>
              {
                preview 
                &&
                  <div className=''>
                     <button onClick={()=>setPreview(null)} className='absolute right-16'>❌</button>
                     <img className='rounded' src={preview} alt="previewImage" />
                  </div> 
               
              }
          </div>

            </div>
          </div>
        </div>

        <div className='flex justify-between gap-x-4 px-8 pb-8 ml-16'>

         <div className='flex items-center gap-x-4 '>
           <label for="file-input">
              <CiImageOn className='text-blue-700 font-bold cursor-pointer'/>
           </label>
           <input
             onChange={(e) => handleImageUpload(e)} 
             id="file-input"
             type="file"
             className='cursor-pointer hidden'
           />
           <button className='text-blue-700 font-bold cursor-pointer'><BsEmojiSmile /></button>
         </div>

          
          <button onClick={postSubmit} className='flex justify-center items-center px-3 py-0 bg-blue-600 rounded-full'>
            Post
          </button>
        </div>

      </div>

    </div>
  )
}

export default Post