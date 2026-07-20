import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import LinkTree from "@/components/LinkTree";
import { toast } from "react-toastify";
import Link from "next/link";
import SocialTree from "@/components/SocialTree";
import ShareButton from "@/components/ShareButton";

function Handle() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [socialMedia, setSocialMedia] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userHandle = router.query?.handle;
        if (userHandle) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_LINK_TREE_BACKEND_URL}/get/${userHandle}`
          );

          setData(response?.data?.data);
          setSocialMedia(response?.data?.data?.socialMedia || "{}");
          setUserFound(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.warning("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, [router.query]);

  // useEffect(()=>{
  //   const getSocialMediaData = async () => {
  //     try {
  //       const userHandle = router.query?.handle;
  //       if (userHandle) {
  //         const response = await axios.get(
  //           `LINK_TREE_BACKENT_URl/get/socials/${userHandle}`
  //         );

  //         console.log(response?.data?.data);
  //         setSocialMedia(response?.data?.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching Social Media Links:", error);
  //       toast.warning("Error fetching Social Media Links");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getSocialMediaData();
  // },[router.query])

  if (loading) {
    return (
      <div className="min-h-screen dots-bg flex justify-center items-center">
        <div className="toon-sticker bg-white px-8 py-6 text-xl font-extrabold text-[#1a1a2e]">
          Loading... 🌀
        </div>
      </div>
    );
  }

  if (!userFound) {
    return (
      <div className="min-h-screen dots-bg flex justify-center items-center px-4">
        <div className="toon-sticker bg-white px-8 py-10 flex flex-col gap-y-3 text-center max-w-md toon-pop">
          <div className="text-5xl">🙈</div>
          <h1 className="font-extrabold text-2xl text-[#1a1a2e]">
            User not found
          </h1>
          <p className="font-semibold text-[#3d3d5c]">
            If you're looking for a page, double check the spelling.
          </p>
          <p className="font-semibold text-[#3d3d5c] mt-2">
            Create your own{" "}
            <Link
              href="/apply"
              className="toon-btn inline-block bg-[#FFD93D] text-[#1a1a2e] px-4 py-1 ml-1"
            >
              LinkTree
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dots-bg pb-10">
      <LinkTree data={data} />
      <SocialTree socialMedia={socialMedia} />
      <ShareButton />
    </div>
  );
}

export default Handle;
