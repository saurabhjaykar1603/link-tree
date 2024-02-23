import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import UserHeader from "@/components/UserHeader";
import axios from "axios";
import { toast } from "react-toastify";

function profile() {
  const { user, setUser } = useContext(UserContext);
  const [socialMedia, setSocialMedia] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: "",
  });
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(
    "https://cdn-icons-png.flaticon.com/128/1154/1154473.png"
  );
  const handleSocial = (e) => {
    setSocialMedia({
      ...socialMedia,
      [e.target.id]: e.target.value,
    });
  };
  const saveSocial = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/save/social",
        {
          tokenMail: localStorage.getItem("LinkTreeToken"),
          socials: socialMedia,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
  
      if (response?.data.success) {
        toast.success("Profile Updated");
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      const errorMessage = error.response?.data.message || "Error updating profile";
      toast.error(errorMessage);
    }
  };
  

  useEffect(() => {
    if (user) {
      setName(user.name);
      setBio(user.bio);
      setAvatar(user.avatar);
    }
  }, [user]);
  return (
    <>
      <div className="h-screen">
        <UserHeader />
        <main>
          <section className="flex justify-evenly mt-14 flex-wrap gap-y-10">
            <div className=" w-[600px] mx-auto">
              <h1 className="text-center  mb-5 text-3xl text-blue-600 font-bold">
                Edit Profile
              </h1>
              <div>
                <form className="flex justify-center flex-col items-center">
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/avatar.svg" alt="" />
                    <input
                      className=" focus:outline-none w-full"
                      type="text"
                      placeholder="Set a Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </span>{" "}
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/bio.svg" alt="" />
                    <input
                      className=" focus:outline-none w-full"
                      type="text"
                      placeholder="Enter a bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </span>{" "}
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/avatar.svg" alt="" />
                    <input
                      className=" focus:outline-none w-full"
                      type="text"
                      placeholder="Enter image Link"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <img
                      src={avatar}
                      alt=""
                      className="w-8 rounded-full border-2 border-white shadow-md "
                    />
                  </span>
                  <button
                    type="button"
                    className="w-32 bg-green-400 px-3 py-2 rounded-md border-2 border-green-600 font-bold shadow-xl hover:bg-green-500 duration-300 "
                  >
                    Save Profile
                  </button>
                </form>
              </div>
            </div>

            <div className=" w-[600px] mx-auto">
              <h1 className="text-center  mb-5 text-3xl text-blue-600 font-bold">
                Edit Social Links
              </h1>
              <div>
                <form className="flex justify-center flex-col items-center">
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/fb.svg" alt="" />
                    <input
                      className=" focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Facebook Link"
                      id="facebook"
                      value={socialMedia.facebook}
                      onChange={handleSocial}
                    />
                  </span>{" "}
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/ig.svg" alt="" />
                    <input
                      className=" focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Instagram Link"
                      id="instagram"
                      value={socialMedia.instagram}
                      onChange={handleSocial}
                    />
                  </span>{" "}
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/tw.svg" alt="" />
                    <input
                      className=" focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Twitter Link"
                      id="twitter"
                      value={socialMedia.twitter}
                      onChange={handleSocial}
                    />
                  </span>
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/linkdn.svg" alt="" />
                    <input
                      className=" focus:outline-none"
                      type="text"
                      placeholder="Enter Linkedin Link"
                      id="linkedin"
                      value={socialMedia.linkedin}
                      onChange={handleSocial}
                    />
                  </span>{" "}
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/github.svg" alt="" />
                    <input
                      className=" focus:outline-none"
                      type="text"
                      placeholder="Enter Github Link"
                      id="github"
                      value={socialMedia.github}
                      onChange={handleSocial}
                    />
                  </span>{" "}
                  <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none w-11/12 mx-auto mb-5">
                    <img className="w-6 mr-2" src="/svg/yt.svg" alt="" />
                    <input
                      className=" focus:outline-none"
                      type="text"
                      placeholder="Enter Youtube Link"
                      id="youtube"
                      value={socialMedia.youtube}
                      onChange={handleSocial}
                    />
                  </span>
                  <button
                    type="button"
                    className="w-32 bg-green-400 px-3 py-2 rounded-md border-2 border-green-600 font-bold shadow-xl hover:bg-green-500 duration-300 "
                    onClick={saveSocial}
                  >
                    Save Links
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default profile;
