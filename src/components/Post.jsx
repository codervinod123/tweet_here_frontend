import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import IMG from "../../src/assets/vinod.jpg";

import EmojiPicker from "emoji-picker-react";
import Button from "./commonComp/Button";

const Post = () => {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [content, setContent] = useState("");
  const [emojipicker, setEmojipicker] = useState(false);

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleImageUpload = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const postSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("file", image.data);
      await fetch("http://localhost:3001/api/v1/tweet", {
        method: "POST",
        body: formData,
      });

      setImage({ preview: "", data: "" });
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black overflow-auto pt-8">
      <div className="border-b">
        <div className="px-8 grid grid-cols-12 py-4">
          <div className="">
            <Link to="/profile">
              <img className="w-[40px] rounded-full" src={IMG} alt="" />
            </Link>
          </div>
          <div className="col-span-11">
            <input
              className="bg-black text-white text-[1rem] outline-none placeholder:text-gray-400  w-[100%]"
              placeholder="What id happening ?"
              type="text"
              value={content}
              name="content"
              onChange={(e) => handleContent(e)}
            />
            <div className="my-2 rounded-lg"></div>
            <div className="flex gap-x-8 pt-4">
              <div>
                {image.preview && (
                  <div className="">
                    <button
                      onClick={() => setImage({ preview: "", data: "" })}
                      className="absolute right-16"
                    >
                      ❌
                    </button>
                    <img
                      className="rounded"
                      src={image.preview}
                      alt="previewImage"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-x-4 px-8 pb-8 ml-16">
          <div className="flex items-center gap-x-4 ">
            <label htmlFor="file-input">
              <CiImageOn className="text-blue-700 font-bold cursor-pointer" />
            </label>
            <input
              onChange={(e) => handleImageUpload(e)}
              id="file-input"
              type="file"
              className="cursor-pointer hidden"
            />
            <button
              onClick={() => setEmojipicker(!emojipicker)}
              className="text-blue-700 font-bold cursor-pointer"
            >
              <BsEmojiSmile />
            </button>
          </div>
          <div onClick={postSubmit}>
            <Button buttonName="Post" />
          </div>
        </div>

        <div className="absolute left-16 mt-[2px]">
          {emojipicker && (
            <EmojiPicker
              theme="dark"
              width={250}
              height={350}
              onEmojiClick={(em) => setContent((prev) => prev + em.emoji)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
