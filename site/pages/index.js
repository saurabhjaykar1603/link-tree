import Link from "next/link";
import MyHead from "../components/MyHead";

export default function Home() {
  return (
    <>
      <MyHead title="Home" />

      <div class="w-full bg-slate-200 py- mt-0   ">
        <div class="container mx-auto grid md:grid-cols-2 gap-5 px-4 md:px-0">
          <div class="flex flex-col justify-center md:justify-startmd:gap-4 p-5">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-950 text-center md:text-start">
              Welcome To <span class="text-blue-600">LinkTree</span>
            </h1>
            <div class="text-lg text-center md:text-start md:text-[22px] md:font-semibold mt-5 text-gray-700 md:leading-10">
              Assist your followers in discovering all your activities by using
              just one <span className="text-blue-500"> simple link.</span>
              <p class="text-lg text-center md:text-start md:text-[22px] md:font-semibold mt-5 text-gray-700 md:leading-10">
                Turn your Link In Bio into your own{" "}
                <span className="text-blue-500"> mini-website</span>
              </p>
            </div>

            <div className="mt-4">
              <button className=" bg-blue-400 px-4 py-4 text-white hover:bg-blue-500 duration-300 rounded-md font-bold shadow-lg">
                {" "}
                Get Started to Create Your First LinkTree
              </button>
            </div>
          </div>
          <div class="flex justify-center md:justify-center">
            <img
              style={{
                filter: "drop-shadow( 1px 5px 6px #003399)",
              }}
              src="/images/home.svg"
              alt="Home Illustration"
              class="w-96 md:w-[450px]"
            />
          </div>
        </div>

        <section className=" px-5 md:px-24">
          <div className=" grid  gap-5  sm:grid-cols-12">
            <div className="min-h-[100px] rounded-md bg-slate-50 shadow-xl sm:col-span-4 border-2 hover:border-blue-300 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/add-group.png"
                    alt=""
                    className="h-[80px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-600 md:text-xl font-semibold">
                    Easy To Register
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px]">
                    There are simple steps to create an account
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-slate-50 shadow-xl sm:col-span-4 border-2 hover:border-blue-300 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/ux.png"
                    alt=""
                    className="h-[80px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-600 md:text-xl font-semibold">
                    Intuitive User Interface
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px]">
                    A simple and clear UI designed for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-slate-50 shadow-xl sm:col-span-4 border-2 hover:border-blue-300 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/link.png"
                    alt=""
                    className="h-[80px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-600 md:text-xl font-semibold">
                    Easily Share Your Profile
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px]">
                    Share your profile effortlessly with anyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-slate-50 shadow-xl sm:col-span-4 border-2 hover:border-blue-300 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/updated.png"
                    alt=""
                    className="h-[80px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-600 md:text-xl font-semibold">
                    Simple Profile Updates
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px]">
                    Effortlessly manage your profile and links.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-slate-50 shadow-xl sm:col-span-4 border-2 hover:border-blue-300 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/share.png"
                    alt=""
                    className="h-[80px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-600 md:text-xl font-semibold">
                    Easy To Register
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px]">
                    There are simple steps to create an account
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[100px] rounded-md bg-slate-50 shadow-xl sm:col-span-4 border-2 hover:border-blue-300 duration-300">
              <div className="grid gap-3 grid-cols-12 p-3">
                <div className="col-span-4 h-full">
                  <img
                    src="/images/analyitics.png"
                    alt=""
                    className="h-[80px] mx-auto shadow-ld border-2 p-2 rounded-lg image-clickable transform transition-transform duration-300 hover:scale-110 hover:animate-move-up-down"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-gray-600 md:text-xl font-semibold">
                    Google Analitics
                  </h1>
                  <p className="text-[15px] mt-1 md:text-[17px]">
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
