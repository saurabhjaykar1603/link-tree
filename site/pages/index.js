import MyHead from "../components/MyHead";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const features = [
  {
    img: "/images/add-group.png",
    title: "Easy To Register",
    text: "There are simple steps to create an account",
    color: "bg-[#FFD93D]",
    tilt: "-rotate-1",
  },
  {
    img: "/images/ux.png",
    title: "Intuitive User Interface",
    text: "A simple and clear UI designed for you.",
    color: "bg-[#FF8FAB]",
    tilt: "rotate-1",
  },
  {
    img: "/images/link.png",
    title: "Easily Share Your Profile",
    text: "Share your profile effortlessly with anyone.",
    color: "bg-[#4ECDC4]",
    tilt: "-rotate-1",
  },
  {
    img: "/images/updated.png",
    title: "Simple Profile Updates",
    text: "Effortlessly manage your profile and links.",
    color: "bg-[#A5D8FF]",
    tilt: "rotate-1",
  },
  {
    img: "/images/share.png",
    title: "One Link For Everything",
    text: "All your socials living under a single roof.",
    color: "bg-[#C3F584]",
    tilt: "-rotate-1",
  },
  {
    img: "/images/analyitics.png",
    title: "Google Analytics",
    text: "Web analytics service by Google.",
    color: "bg-[#FFB870]",
    tilt: "rotate-1",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <MyHead title="Home" />

      <div className="w-full min-h-screen dots-bg pb-24">
        {/* Hero */}
        <div className="container mx-auto grid md:grid-cols-2 gap-8 px-5 md:px-8 pt-10 md:pt-16 items-center">
          <div className="flex flex-col justify-center gap-5 toon-pop">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] text-center md:text-left leading-tight">
              Welcome To{" "}
              <span className="toon-highlight bg-[#FFD93D] border-[3px] border-[#1a1a2e] shadow-[4px_4px_0_#1a1a2e]">
                LinkTree
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-[#3d3d5c] text-center md:text-left leading-relaxed">
              Assist your followers in discovering all your activities by using
              just one{" "}
              <span className="toon-highlight bg-[#A5D8FF] border-2 border-[#1a1a2e] text-[#1a1a2e] rotate-1">
                simple link
              </span>
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#3d3d5c] text-center md:text-left leading-relaxed">
              Turn your Link In Bio into your own{" "}
              <span className="toon-highlight bg-[#FF8FAB] border-2 border-[#1a1a2e] text-[#1a1a2e]">
                mini-website
              </span>
            </p>

            <div className="mt-2 flex justify-center md:justify-start">
              <button
                onClick={() => {
                  router.push("/apply");
                }}
                className="toon-btn bg-[#7c3aed] text-white px-6 py-3.5 text-base md:text-lg"
              >
                🚀 Get Started — It&apos;s Free!
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="toon-sticker bg-white p-5 md:p-8 toon-float max-w-[90%]">
              <img
                src="/images/home-toon.svg"
                alt="Home Illustration"
                className="w-72 sm:w-80 md:w-[420px]"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="px-5 md:px-16 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a2e] text-center mb-10">
            Why you&apos;ll{" "}
            <span className="toon-highlight bg-[#4ECDC4] border-[3px] border-[#1a1a2e] shadow-[3px_3px_0_#1a1a2e]">
              love it
            </span>{" "}
            💜
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className={`toon-card ${f.color} ${f.tilt} p-5 hover:rotate-0`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white border-[3px] border-[#1a1a2e] rounded-2xl p-2 shadow-[3px_3px_0_#1a1a2e] shrink-0 toon-wiggle">
                    <img src={f.img} alt="" className="h-12 w-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-extrabold text-[#1a1a2e]">
                      {f.title}
                    </h3>
                    <p className="text-[15px] md:text-base font-medium text-[#3d3d5c] mt-1">
                      {f.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
