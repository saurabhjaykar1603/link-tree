import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import LinkTree from "@/components/LinkTree";
import { toast } from "react-toastify";

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
    return <div>User nahi Mila</div>;
  }

  return (
    <div>
      <LinkTree data={data} />
    </div>
  );
}

export default Handle;
