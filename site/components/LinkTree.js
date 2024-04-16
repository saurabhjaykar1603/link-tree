import React from "react";
import LinkTreeCard from "./LinkTreeCard";
import { AnimatePresence , motion} from "framer-motion";

function LinkTree({ data }) {
  const { handle, avatar, bio, links ,name } = data;
  console.log(links)
  return (
    <>
     <section className="relative p-3">
  <img src={avatar} alt="" className="w-20 absolute rounded-full left-1/2 -translate-x-1/2 mt-0" />
  <h2 className="text-center text-lg text-gray-100 font-bold pt-24">{name ? name : "No Username"}</h2>
  <p className="text-center  text-gray-100  font-normal   pb-5 pt-3"> {bio}</p>
  <div className="flex flex-col m-auto justify-center max-w-7xl md:my-2 w-full md:w-2/5 ">

    <AnimatePresence>
      {links?.map((link, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 + 0.5 },
          }}
        >
          <LinkTreeCard title={link.title} url={link.url} image={link.icon} />
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
</section>

    </>
  );
}

export default LinkTree;
