import UserHeader from "@/components/UserHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function link() {
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

    // Now linksData is an array of objects containing link and title pairs
    console.log(linksData);

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
        toast.success(" Links Loaded ");
        console.log(response?.data?.handle);
        setLinks(response?.data?.data);
        window.location.href = `${process.env.NEXT_PUBLIC_LINK_TREE_FRONTEND_URL}/${response?.data?.handle}`;
      } else {
        toast.error("Failed to  links");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data.message || "Error loadind Links";
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
          toast.success(" Links Loaded ");
          console.log(response?.data?.data);
          setLinks(response?.data?.data || []);
        } else {
          toast.error("Failed to  links");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data.message || "Error loadind Links";
        toast.error(errorMessage);
      }
    };
    loadLinks();
  }, []);
  return (
    <>
      <div
        className="w-full py- mt-0 h-[900px] md:h-screen  "
        style={{ background: "linear-gradient(to bottom, #4b0082, #000000)" }}
      >
        <UserHeader />

        <main>
          <section>
            <h1 className="text-center text-2xl text-gray-300 font-semibold">
              Edit Your Links
            </h1>
            <div>
              <form action="" className="px-5 my-5">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-transparent border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-gray-300 font-bold">Url</th>
                        <th className="py-2 px-4 border-b text-gray-300 font-bold">Title</th>
                        <th className="py-2 px-4 border-b text-gray-300 font-bold">Remove Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      {links?.map((linkObj, index) => {
                        const { title, url } = linkObj;
                        return (
                          <tr key={index}>
                            <td className="py-2 px-4 border-b  ">
                              <input
                                type="text"
                                value={url}
                                onChange={(e) =>
                                  handleChange(index, "url", e.target.value)
                                }
                                className="shadow-md border-2   focus:outline-none  py-2 px-3  rounded-md w-full md:w-full"
                                placeholder="Enter your url"
                              />
                            </td>
                            <td className="py-2 px-4 border-b ">
                              <input
                                type="text"
                                value={title}
                                onChange={(e) =>
                                  handleChange(index, "title", e.target.value)
                                }
                                className="shadow-md border-2   focus:outline-none  py-2 px-3  rounded-md w-full md:w-full"
                                placeholder="Enter your Title"
                              />
                            </td>
                            <td className="py-2 px-4 border-b flex justify-center ">
                              <button
                                type="button"
                                onClick={() => {
                                  handleRemoveLink(index);
                                }}
                                className="outline-none border-2  mx-auto border-red-700 py-2  font-bold bg-red-400 px-3  rounded-md w-full md:w-full"
                              >
                                Remove Link
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center flex-wrap gap-5 mt-5">
                  <button
                    type="button"
                    onClick={handleAddLink}
                    className="w-full md:w-1/2 bg-purple-500 hover:bg-purple-700 duration-200 px-2 p-2 text-white font-bold rounded-md shadow-md"
                  >
                    Add Link
                  </button>
                  <button
                    type="button"
                    className="w-full md:w-1/2 bg-green-500 px-2 p-2 text-black font-bold rounded-md shadow-md"
                    onClick={saveLinks}
                  >
                    Save Link
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default link;
