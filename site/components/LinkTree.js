import React from "react";
import LinkTreeCard from "./LinkTreeCard";
import { AnimatePresence, motion } from "framer-motion";

function LinkTree({ data }) {
  const { handle, avatar, bio, links, name } = data;
  const realLinks = (links || []).filter(
    (link) => (link?.url || "").trim() || (link?.title || "").trim()
  );
  return (
    <section className="relative p-3 !pt-10">
      <div className="flex justify-center">
        <img
          src={avatar}
          alt=""
          className="w-24 h-24 object-cover rounded-full border-[4px] border-[#1a1a2e] shadow-[5px_5px_0_#1a1a2e] bg-[#FFD93D]"
        />
      </div>
      <h2 className="text-center text-2xl text-[#1a1a2e] font-extrabold pt-4">
        {name ? name : "No Username"}
      </h2>
      {handle && (
        <p className="text-center font-bold text-[#7c3aed]">@{handle}</p>
      )}
      {bio && (
        <p className="text-center font-semibold text-[#3d3d5c] pb-5 pt-2">
          {bio}
        </p>
      )}
      <div className="flex flex-col m-auto justify-center max-w-7xl md:my-2 w-full px-2 sm:w-3/4 md:w-2/5">
        <AnimatePresence>
          {realLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.1 + 0.3 },
              }}
            >
              <LinkTreeCard
                title={link.title}
                url={link.url}
                image={link.icon}
                index={i}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default LinkTree;
