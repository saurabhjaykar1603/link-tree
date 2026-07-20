import UserHeader from "@/components/UserHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function link() {
  const router = useRouter();
  const [links, setLinks] = useState([{ url: "", title: "" }]);
  const [title, setTitle] = useState("");
  const handleChange = (index, field, value) => {
    const updatedLinks = [...links];
    const LinkToUpdate = { ...updatedLinks[index], [field]: value };
    updatedLinks[index] = LinkToUpdate;
    setLinks(updatedLinks);
  };
  const handleRemoveLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };
  const handleAddLink = () => {
    setLinks([...links, { url: "", title: "" }]);
  };

  const saveLinks = async (e) => {
    e.preventDefault();

    // Convert links and title state values to arrays
    const linksArray = Object.values(links);
    const titleArray = Object.values(title);

    // Create an array of objects from links and title
    const linksData = linksArray.map((link, index) => ({
      link: link,
      title: titleArray[index],
    }));

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LINK_TREE_BACKEND_URL}/api/v1/save/links`,
        {
          tokenMail: localStorage.getItem("LinkTreeToken"),
          links: linksData,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response?.data.success) {
        toast.success("Links Saved");
        setLinks(response?.data?.data);
        window.location.href = `${process.env.NEXT_PUBLIC_LINK_TREE_FRONTEND_URL}/${response?.data?.handle}`;
      } else {
        toast.error("Failed to save links");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data.message || "Error saving links";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) return router.push("/login");
    const loadLinks = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_LINK_TREE_BACKEND_URL}/api/v1/load/links`,
          {
            tokenMail: localStorage.getItem("LinkTreeToken"),
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        if (response?.data.success) {
          setLinks(response?.data?.data || []);
        } else {
          toast.error("Failed to load links");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data.message || "Error loading links";
        toast.error(errorMessage);
      }
    };
    loadLinks();
  }, []);
  return (
    <>
      <div className="w-full min-h-screen dots-bg pb-10">
        <UserHeader />

        <main className="px-4 md:px-8">
          <section className="!pt-6 max-w-3xl mx-auto">
            <h1 className="text-center text-2xl md:text-3xl font-extrabold text-[#1a1a2e] mb-6">
              Edit Your{" "}
              <span className="toon-highlight bg-[#A5D8FF] border-2 border-[#1a1a2e]">
                Links
              </span>{" "}
              🪄
            </h1>
            <form className="flex flex-col gap-5">
              {links?.map((linkObj, index) => {
                const { title, url } = linkObj;
                return (
                  <div
                    key={index}
                    className="toon-card bg-white p-4 md:p-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center"
                  >
                    <span className="toon-btn hidden md:flex items-center justify-center bg-[#FFD93D] text-[#1a1a2e] w-10 h-10 shrink-0 !rounded-full font-extrabold">
                      {index + 1}
                    </span>
                    <input
                      type="text"
                      value={url || ""}
                      onChange={(e) =>
                        handleChange(index, "url", e.target.value)
                      }
                      className="toon-input py-2 px-3 w-full font-medium"
                      placeholder="Enter your URL"
                    />
                    <input
                      type="text"
                      value={title || ""}
                      onChange={(e) =>
                        handleChange(index, "title", e.target.value)
                      }
                      className="toon-input py-2 px-3 w-full font-medium"
                      placeholder="Enter your Title"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        handleRemoveLink(index);
                      }}
                      className="toon-btn bg-[#FF8FAB] text-[#1a1a2e] py-2 px-4 shrink-0"
                    >
                      🗑️ Remove
                    </button>
                  </div>
                );
              })}
              <div className="flex justify-center flex-col sm:flex-row gap-4 mt-2">
                <button
                  type="button"
                  onClick={handleAddLink}
                  className="toon-btn w-full sm:w-1/2 bg-[#7c3aed] px-4 py-3 text-white"
                >
                  ➕ Add Link
                </button>
                <button
                  type="button"
                  className="toon-btn w-full sm:w-1/2 bg-[#C3F584] px-4 py-3 text-[#1a1a2e]"
                  onClick={saveLinks}
                >
                  💾 Save Links
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default link;
