import Image from "next/image";
import GlassNavbar from "./components/GlassNavbar";
import FeatureSection from "./components/featuresection";
import Use from "./components/use";

export default function Home() {
  return (
    <>
      <GlassNavbar />
      
      <div className="flex flex-col items-center  py-2 mt-25">
        <div className="shadow-md h-10 w-60 flex mt-[50px] justify-center items-center  left-[42%] rounded-full border border-blue-700">
          <p className="text-[14px] text-black">Travel Safe, Every Step of the Way</p>
        </div>
        <div className="mt-5 mx-w-[60vw] text-center px-5">

        <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent  ">
              Safety That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Never Sleeps.
              </span>
            </h1>
        <p className="text-[18px] text-gray-700 mb-6 max-w-[60vw]">
Travel should feel exciting, not risky, with live location sharing, instant SOS, and safe routes that let tourists explore confidently while authorities monitor through an intuitive dashboard.</p>
        <div className="flex space-x-4 justify-center">
  {/* Download App Button */}
  <button
    className="
      relative px-6 py-3 rounded-full font-semibold text-white
      bg-gradient-to-r from-blue-400 to-blue-500
      shadow-lg
      transition-all duration-300
      hover:scale-105 hover:shadow-xl hover:from-blue-500 hover:to-blue-600
      active:scale-95
    "
  >
    Download App
  </button>

  {/* Authorities Login Button */}
  <button
    className="
      relative px-6 py-3 rounded-full font-semibold
      text-gray-800 bg-white/90 backdrop-blur-sm border border-gray-300
      shadow-md
      transition-all duration-300
      hover:scale-105 hover:shadow-lg hover:bg-white/100
      active:scale-95
    "
  >
    Authorities Login
  </button>
</div>

          <div className="ml-90 mt-5">
          <Image
            src="/images/climber.jpg"
            alt="Hero Image"
            width={200}
            height={200}></Image>
          </div>
        </div>
      </div>
      <FeatureSection />
      <Use />
    </>
  );
}
