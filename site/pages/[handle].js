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
    return <div>Loading...</div>;
  }

  if (!userFound) {
    return (
      <div
        className="min-h-screen flex justify-center items-center "
       
      >
        <div className=" flex  flex-col gap-y-3">
          <h1 className="font-bold text-xl"> User not found ☹️</h1>
          <p>If you're looking for a page , double check the spelling. </p>
          <p>
            Create your own{" "}
            <span>
              <Link
                href="/apply"
                className="ml-2 bg-blue-300 px-3 py-1 rounded-sm hover:bg-blue-400 duration-300 transition-all"
              >
                LinkTree
              </Link>
            </span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div  className="md:h-screen h-[900px]" style={{ background: "linear-gradient(to bottom, #4b0082, #000000)" }}>
      <LinkTree data={data} />
      <SocialTree socialMedia={socialMedia} />
      <ShareButton />
    </div>
  );
}

export default Handle;
