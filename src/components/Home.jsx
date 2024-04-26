import { home, arrow } from "../assets";
import { materials } from "../constants";
import { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="relative">
        <video
          autoPlay
          loop
          muted
          className="object-cover md:h-screen min-h-[400px] w-full"
        >
          <source src={home} type="video/mp4" />
          Your browser does not support the video tag
        </video>

        <div className="absolute top-0 bottom-0 z-1 left-0 right-0 bg-dimBlack flex">
          <div className="flex flex-col flex-1 w-full">
            <div className="flex-1 w-full flex flex-col justify-center items-start lg:pl-[100px] pl-[50px]">
              <h1 className="text-white tracking-in-contract font-bold font-poppins lg:leading-[96px] md:leading-[48px] leading-[24px] lg:text-[72px] md:text-[36px] text-[18px]">
                {" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #00bfa5, #ffffff)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Innovation
                </span>{" "}
                for a <br />{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #00bfa5, #ffffff)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  better wor
                </span>
                ld
              </h1>
              <p className="text-white opacity-85 font-poppins font-normal mt-[24px] lg:max-w-[550px] md:max-w-[300px] max-w-[220px] lg:leading-[32px] md:leading-[24px] leading-[18px] lg:text-[20px] md:text-[14px] text-[8px]">
                The Computer Vision Technology (CVT) is a leading global
                research center dedicated to pushing the frontiers of knowledge.
              </p>
            </div>

            <div className="w-full bg-dimSlate lg:pl-[100px] pl-[50px] lg:flex hidden">
              <div className="mr-5 my-1 vertical-line"></div>
              <h4 className="text-white custom-track py-5 font-thin font-poppins text-[14px]">
                SCROLL TO EXPLORE
              </h4>
            </div>
          </div>

          <div
            className={`absolute bg-dimEmerald z-5 h-full right-0 lg:flex flex-col hidden transition-width hover:w-[350px] w-[200px]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex-1 w-full">
              <ul
                className={`flex size-full flex-col ${
                  isHovered ? "items-start" : "items-center"
                } pl-10 pt-[200px]`}
              >
                {materials.map((material, index) => (
                  <li
                    key={material.id}
                    className={`cursor-pointer flex items-center ${
                      index !== materials.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <img
                      src={material.icon}
                      alt={material.name}
                      className="mr-6 hover:filter brightness-100 h-12"
                    />
                    <p
                      className={`text-dimWhite fade-in-text hover:text-white text-[14px] ${
                        isHovered ? "block" : "hidden"
                      }`}
                    >
                      {material.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-[62px] bg-emerald-300 flex justify-end cursor-pointer items-center px-10">
              <p
                className={`text-black text-[14px] fade-in-text ${
                  isHovered ? "block" : "hidden"
                }`}
              >
                Explore All Research Centers
              </p>

              <img src={arrow} alt="arrow" className={`h-12 ml-6 heartbeat`} />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-800 lg:hidden flex flex-col">
        <div>
          <ul className={`flex w-full flex-col  pl-10 py-4`}>
            {materials.map((material, index) => (
              <li
                key={material.id}
                className={`cursor-pointer flex items-center ${
                  index !== materials.length - 1 ? "mb-4" : "mb-0"
                }`}
              >
                <img
                  src={material.icon}
                  alt={material.name}
                  className="mr-6 hover:filter brightness-100 h-12"
                />
                <p className={`text-dimWhite hover:text-white text-[14px]`}>
                  {material.name}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-[62px] bg-emerald-300 flex px-[48px] cursor-pointer justify-between sm:justify-end items-center ">
          <p className={`text-black sm:hidden text-[14px]`}>
            Explore All Research Centers
          </p>

          <img src={arrow} alt="arrow" className={`h-12 ml-6`} />
        </div>
      </div>
    </>
  );
};

export default Home;
