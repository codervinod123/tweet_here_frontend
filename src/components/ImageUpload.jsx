import { FiImage } from "react-icons/fi";
import { useRef, useState } from "react";
import axios from "axios";

export default function ImageUpload({upload}) {
  
  const imagePicker = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedURL, setUploadedURL] = useState(null);

  const onSelectFile = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setPreviewImage(reader.result);
    };
    setSelectedFile(file);
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "upload_from_react_app");
      formData.append("folder", "react_app_uploadation");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/prajapatiautomobiles/image/upload",
        formData
      );
      setUploadedURL(response.data.secure_url);
      setPreviewImage(null);
      setSelectedFile(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="container-imagePicker">
        <FiImage onClick={() => imagePicker.current.click()} />
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          multiple={false}
          id="input-imagePicker"
          ref={imagePicker}
          onChange={onSelectFile}
        />
      </div>

    <button onClick={()=>upload(uploadedURL)}>
        HEYYYYYYYYYYYYYYYYYYYYAAAAA<br/>
    </button>

      {uploadedURL && <div>url: {uploadedURL}</div>}
      {selectedFile && <button onClick={() => uploadImage()}>Upload</button>}
      {previewImage && (
        <div>
          <button onClick={() => setPreviewImage(null)}>Remove</button>
        </div>
      )}
      {previewImage && (
        <div>
          Preview
          <img src={previewImage} alt="selected" />
        </div>
      )}
    </div>
  );
}
