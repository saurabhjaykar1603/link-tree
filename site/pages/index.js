import Link from "next/link";
import MyHead from "../components/MyHead";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";


export default function Home() {
  const router = useRouter()
  return (
    <>
      <MyHead title="Home" />

      <div className="w-full py- mt-0" style={{background: 'linear-gradient(to bottom, #4b0082, #000000)'}}>
        <div className="container mx-auto grid md:grid-cols-2 gap-5 px-4 md:px-0">
          <div className="flex flex-col justify-center md:justify-startmd:gap-4 p-5">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 text-center md:text-start">
              Welcome To <span className="text-white">LinkTree</span>
            </h1>
            <div className="text-lg text-center md:text-start md:text-[22px] md:font-semibold mt-5 text-gray-300 md:leading-10">
              Assist your followers in discovering all your activities by using
              just one <span className="text-blue-400"> simple link.</span>
              <p className="text-lg text-center md:text-start md:text-[22px] md:font-semibold mt-5 text-gray-300 md:leading-10">
                Turn your Link In Bio into your own{" "}
                <span className="text-blue-400"> mini-website</span>
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={() => {
                  router.push("/apply");
                }}
                className=" bg-purple-400 px-4 py-4 text-dark hover:bg-purple-500 duration-300 rounded-md font-bold shadow-lg"
              >
                {" "}
                Get Started to Create Your First LinkTree
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-center">
            <img
              style={{
                filter: "drop-shadow( 1px 5px 1px #003399)",
              }}
              src="/images/home.svg"
              alt="Home Illustration"
              className="w-96 md:w-[450px]"
            />
          </div>
        </div>

        <section className=" px-5 md:px-24">
          <div className=" grid  gap-5  sm:grid-cols-12">
            <div className="min-h-[100px] rounded-md bg-transparent shadow-xl sm:col-span-4 border-2 hover:border-purple-800 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/add-group.png"
                    alt=""
                    className="h-[70px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-200 md:text-xl font-semibold">
                    Easy To Register
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px] text-gray-200 ">
                    There are simple steps to create an account
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-transparent shadow-xl sm:col-span-4 border-2 hover:border-purple-800 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/ux.png"
                    alt=""
                    className="h-[70px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-200 md:text-xl font-semibold">
                    Intuitive User Interface
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px] text-gray-200">
                    A simple and clear UI designed for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-transparent shadow-xl sm:col-span-4 border-2 hover:border-purple-800 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/link.png"
                    alt=""
                    className="h-[70px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-200 md:text-xl font-semibold">
                    Easily Share Your Profile
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px] text-gray-200">
                    Share your profile effortlessly with anyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-transparent shadow-xl sm:col-span-4 border-2 hover:border-purple-800 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/updated.png"
                    alt=""
                    className="h-[70px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-200 md:text-xl font-semibold">
                    Simple Profile Updates
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px] text-gray-200">
                    Effortlessly manage your profile and links.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-transparent shadow-xl sm:col-span-4 border-2 hover:border-purple-800 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/share.png"
                    alt=""
                    className="h-[70px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-200 md:text-xl font-semibold">
                    Easy To Register
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px] text-gray-200">
                    There are simple steps to create an account
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-transparent shadow-xl sm:col-span-4 border-2 hover:border-purple-800 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/analyitics.png"
                    alt=""
                    className="h-[70px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-200 md:text-xl font-semibold">
                    Google Analitics
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px] text-gray-200">
                    Web analytics service by Google.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
