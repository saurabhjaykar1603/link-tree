import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import LinkTree from "@/components/LinkTree";
import { toast } from "react-toastify";
import Link from "next/link";

function Handle() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userHandle = router.query?.handle;
        if (userHandle) {
          const response = await axios.get(
            `http://localhost:8000/get/${userHandle}`
          );

          console.log(response?.data?.data);
          setData(response?.data?.data);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userFound) {
    return (
      <div className="min-h-screen flex justify-center items-center ">
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
    <div>
      <LinkTree data={data} />
    </div>
  );
}

export default Handle;
