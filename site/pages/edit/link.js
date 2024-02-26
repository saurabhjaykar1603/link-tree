import UserHeader from "@/components/UserHeader";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function link() {
  const [links, setLinks] = useState([{ url: "", title: "" }]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
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

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) return router.push("/login");
    const loadLinks = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/load/links",
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
          setLinks(response?.data?.data);
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
      <div>
        <UserHeader />

        <main>
          <section>
            <h1 className="text-center text-2xl text-gray-700 font-semibold">
              Edit Your Links
            </h1>
            <div>
              <form action="" className="px-5">
                {links.map((linkObj, index) => {
                  const { title, url } = linkObj;
                  return (
                    <div
                      key={index}
                      className="flex  flex-wrap justify-evenly my-10 gap-y-5 border-2 border-blue-300 p-5 rounded-md sm:border-red-300 "
                    >
                      <label>
                        <input
                          type="text"
                          value={url}
                          onChange={(e) =>
                            handleChange(index, "url", e.target.value)
                          }
                          className="outline-none border-2 border-blue-300 py-2  px-3 ml-3 rounded-md"
                          placeholder="Enter your url"
                        />
                      </label>
                      <label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) =>
                            handleChange(index, "title", e.target.value)
                          }
                          className="outline-none border-2 border-blue-300 py-2  px-3 ml-3 rounded-md"
                          placeholder="Enter your Title"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemoveLink(index);
                        }}
                        className="bg-red-500 px-3 p-2 text-white font-bold rounded-md shadow-md sm:font-bold"
                      >
                        Remove Link
                      </button>
                    </div>
                  );
                })}
                <div className=" flex justify-center flex-wrap gap-5">
                  <button
                    type="button"
                    onClick={handleAddLink}
                    className="w-1/2 bg-blue-500 px-2 p-2 text-white font-bold rounded-md shadow-md"
                  >
                    Add Link
                  </button>
                  <button
                    type="button"
                    className="w-1/2 bg-green-500 px-2 p-2 text-black font-bold rounded-md shadow-md"
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
