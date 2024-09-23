import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import IMG from "../../../src/assets/harmayni.png";
import { SlCalender } from "react-icons/sl";
import { Link, Outlet } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import axios from "axios";

const Profile = () => {
 
  const [active, setActive] = useState("Posts");
  const [previewProfile, setPreviewProfile] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
  });

  const [user,setUser]=useState(null);
  
  useEffect(()=>{
     async function getUserData(){
         const userId="66ed190a4647523d2b9a9a8f";
         const response=await axios.get(`http://localhost:3001/api/v1/user?userId=${userId}`);
         console.log(response.data.data);
         setUser(response.data.data);
     }
     getUserData();
  },[])

  const dialogRef = useRef(null);
  const handleProfileEdit = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal(); // Open the dialog
    }
  };
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close(); // Close the dialog
    }
  };

  const handleDataChange = (e) => {
    if (e.target.files) {
      const img = e.target.files[0];
      setProfilePic(img);
      setPreviewProfile(URL.createObjectURL(img));
    }
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveUpdate = async () => {
    console.log("Captured data=>", formData);

    const formdata = new FormData();
    formdata.append("file", profilePic);
    formdata.append("name", formData.name);
    formdata.append("bio", formData.bio);
    formdata.append("location", formData.location);

    // later on will replace with user clicked profile id
    formdata.append("id", "66ed18c14647523d2b9a9a89");
    const response = await axios.post(
      "http://localhost:3001/api/v1/updateprofile",
      formdata,
    );
    console.log("results", response);
    setPreviewProfile(null);
    setFormData({
      profilePic: null,
      name: "",
      bio: "",
      location: "",
    });
  };

  return !user ? <h1>User is not loaded still</h1> : (
    <div className="lg:col-span-3 col-span-3 overflow-y-auto relative">
     
      {/* dialog box testing */}
      <dialog className="rounded-lg border border-pink-500" ref={dialogRef}>
        <div className="bg-slate-900 flex flex-col gap-4 p-4 w-[300px]">
          <div className="flex w-full justify-between">
            <div className="flex items-center">
              <IoIosClose
                onClick={closeDialog}
                className="font-bold cursor-pointer"
                size={"1.6rem"}
                color="white"
              />
              <button className="text-sm text-white font-semibold">
                Edit Profile
              </button>
            </div>
            <div>
              <span
                onClick={saveUpdate}
                className="bg-white rounded-full px-3 flex justify-center font-semibold"
              >
                Save
              </span>
            </div>
          </div>

          <label className="flex" htmlFor="updateImg">
            <div className="bg-white border border-pink-500 p-6 rounded-full mt-8 cursor-pointer">
              {previewProfile ? (
                <div className="h-[5rem] w-[5rem] rounded-full">
                  <img
                    className="h-[4rem] w-[4rem]"
                    src={previewProfile}
                    alt="profilepic"
                  />
                </div>
              ) : (
                <BsUpload size={"2rem"} color="black" />
              )}
            </div>
          </label>
          <input
            onChange={(e) => handleDataChange(e)}
            name="profilePic"
            className="hidden"
            id="updateImg"
            type="file"
          />

          <div className="flex flex-col">
            <label className="text-white text-sm font-light pb-[2px]">
              Name
            </label>
            <input
              onChange={(e) => handleDataChange(e)}
              type="text"
              placeholder="Name"
              className="px-2 py-[4px] rounded text-sm font-light text-gray-300 bg-slate-900 border outline-none "
              value={formData.name}
              name="name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-light pb-[2px]">
              Bio
            </label>
            <input
              onChange={(e) => handleDataChange(e)}
              type="text"
              placeholder="Bio"
              className="px-2 py-[4px] rounded text-sm font-light text-gray-300 bg-slate-900 border outline-none "
              value={formData.bio}
              name="bio"
              // onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-light pb-[2px]">
              Location
            </label>
            <input
              onChange={(e) => handleDataChange(e)}
              type="text"
              placeholder="Location"
              className="px-2 py-[4px] rounded text-sm font-light text-gray-300 bg-slate-900 border outline-none "
              value={formData.location}
              name="location"
              // onChange={handleInputChange}
            />
          </div>
        </div>
      </dialog>

      <div className="flex justify-between py-1 px-8 backdrop-blur sticky top-0 z-10">
        <div className="flex items-center gap-x-6">
          <div className="cursor-pointer hover:bg-gray-900 rounded-full p-[3px] transition-all duration-500">
            <Link to="/home">
              <IoIosArrowRoundBack size={"1.3rem"} />
            </Link>
          </div>
          <div className="flex flex-col leading-[18px]">
            <span className="font-semibold">{user.name}</span>
            <span className="text-gray-600 text-sm">238 Posts</span>
          </div>
        </div>
      </div>

      <div className="h-[200px] bg-gray-700 relative"></div>

      <div className="box-border relative top-[-50px] px-8 text-white">
        <div className="box-border border-2 border-slate-700 h-[100px] w-[100px] rounded-full">
          <img
            className="rounded-full box-border h-[100px] w-[100px]"
            src={user.profilePic}
            alt=""
          />
        </div>

        <div className="pt-3 leading-[16px] flex justify-between">
          <div>
            <h1 className="font-bold">{user.name}</h1>
            <h1 className="text-thin text-gray-600">{user.name}</h1>
          </div>
          <button
            onClick={handleProfileEdit}
            className="border px-2 py-[3px] rounded-full text-sm font-semibold hover:bg-gray-900 transition-all duration-500"
          >
            Edit Profile
          </button>
        </div>

        <div className="pt-2">
          <h1 className="text-[13px]">{user.bio}</h1>
          <h1 className="text-[13px]">{user.location}</h1>
        </div>

        <div className="pt-2 flex items-center gap-x-2">
          <SlCalender size={".6rem"} />
          <p className="text-[12px] text-thin text-gray-600">
            Joined on feb 2023
          </p>
        </div>

        <div className="pt-2 flex items-center gap-x-2">
          <p className="text-[12px] text-thin text-white font-semibold">
            543<span className="px-1 text-gray-600 font-normal">Followers</span>
          </p>
          <p className="text-[12px] text-thin text-white font-semibold">
            203<span className="px-1 text-gray-600 font-normal">Following</span>
          </p>
        </div>
      </div>

      <div className="box-border border-b px-8 text-white mt-[-30px] py-3">
        <ul className="flex justify-between">
          <li
            onClick={() => setActive("Posts")}
            className="text-gray-600 font-semibold flex flex-col gap-y-1"
          >
            <Link to="">
              <span>Posts</span>
              {active == "Posts" ? (
                <div className="h-[4px] bg-blue-500 rounded-full"></div>
              ) : (
                ""
              )}
            </Link>
          </li>
          <li
            onClick={() => setActive("Replies")}
            className="text-gray-600 font-semibold flex flex-col gap-y-1"
          >
            <Link to="futureupdate">
              <span>Replies</span>
              {active == "Replies" ? (
                <div className="h-[4px] bg-blue-500 rounded-full"></div>
              ) : (
                ""
              )}
            </Link>
          </li>
          <li
            onClick={() => setActive("Highlights")}
            className="text-gray-600 font-semibold flex flex-col gap-y-1"
          >
            <Link to="futureupdate">
              <span>Highlights</span>
              {active == "Highlights" ? (
                <div className="h-[4px] bg-blue-500 rounded-full"></div>
              ) : (
                ""
              )}
            </Link>
          </li>
          <li
            onClick={() => setActive("Artile")}
            className="text-gray-600 font-semibold flex flex-col gap-y-1"
          >
            <Link to="futureupdate">
              <span>Artile</span>
              {active == "Artile" ? (
                <div className="h-[4px] bg-blue-500 rounded-full"></div>
              ) : (
                ""
              )}
            </Link>
          </li>
          <li
            onClick={() => setActive("Media")}
            className="text-gray-600 font-semibold flex flex-col gap-y-1"
          >
            <Link to="futureupdate">
              <span>Media</span>
              {active == "Media" ? (
                <div className="h-[4px] bg-blue-500 rounded-full"></div>
              ) : (
                ""
              )}
            </Link>
          </li>
          <li
            onClick={() => setActive("Links")}
            className="text-gray-600 font-semibold flex flex-col gap-y-1"
          >
            <Link to="futureupdate">
              <span>Links</span>
              {active == "Links" ? (
                <div className="h-[4px] bg-blue-500 rounded-full"></div>
              ) : (
                ""
              )}
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default Profile;
