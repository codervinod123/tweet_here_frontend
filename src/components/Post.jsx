import React, { useState, useEffect } from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import IMG from "../../src/assets/vinod.jpg";
import axios from 'axios';


const Post = () => {

  const [image,setImage]=useState({ preview:'',data:'' })
  const [content,setContent]=useState("");

  const handleContent = (e) => {
    setContent(e.target.value);
  }

  const handleImageUpload = (e) => {     
     const img = {
       preview: URL.createObjectURL(e.target.files[0]),
       data: e.target.files[0],
    }
    setImage(img)
  }

  const postSubmit = async () => {
    try {
       const formData=new FormData();
       formData.append('content',content);
       formData.append('file',image.data);
       await fetch(
            'http://localhost:3001/api/v1/tweet',
            {
              method: 'POST',
              body: formData
            }
       );

       setImage({ preview:'',data:'' });
       setContent("");

    }
     catch (error) {
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
              onChange={(e) => handleContent(e)}
            />
            <div className='my-2 rounded-lg'>
            </div>
            <div className='flex gap-x-8 pt-4'>
            <div>
              {
                image.preview 
                &&
                  <div className=''>
                     <button onClick={ ()=>setImage({preview:'',data:''}) } className='absolute right-16'>❌</button>
                     <img className='rounded' src={image.preview} alt="previewImage" />
                  </div> 
               
              }
          </div>

            </div>
          </div>
        </div>

        <div className='flex justify-between gap-x-4 px-8 pb-8 ml-16'>

         <div className='flex items-center gap-x-4 '>
           <label htmlFor="file-input">
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







// import React, { useState, useEffect } from 'react'


// const  Post=()=> {
//   const [image, setImage] = useState({ preview: '', data: '' })
//   const [status, setStatus] = useState('')
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     let formData = new FormData()
//     formData.append('content', "constant content from vinod #side")
//     formData.append('file', image.data)
//     const response = await fetch('http://localhost:3001/api/v1/tweet', {
//       method: 'POST',
//       body: formData,
//     })
//     if (response) setStatus(response.statusText)
//   }

//   const handleFileChange = (e) => {
//     const img = {
//       preview: URL.createObjectURL(e.target.files[0]),
//       data: e.target.files[0],
//     }
//     setImage(img)
//   }


// return (
//   <div className='App border p-12'>
//     <h1>Upload to server</h1>
//     {image.preview && <img src={image.preview} width='100' height='100' />}
//     <hr></hr>
//     <form onSubmit={handleSubmit}>
//       <input type='file' name='file' onChange={handleFileChange}></input>
//       <button type='submit'>Submit</button>
//     </form>
//     {status && <h4>{status}</h4>}
//   </div>
//  )
// }

// export default Post;