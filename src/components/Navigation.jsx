import { navLinks } from "../constants";
import { search } from "../assets";
import { useState } from "react";

const Navigation = () => {
  const [english, setEnglish] = useState(true);

  return (
    <section className="bg-slate-800 flex lg:flex-row flex-col flex-1">
      <div className="flex-1 flex justify-start lg:pl-20 pl-10 items-center p-10">
        <ul className="">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className="lg:text-bold text-semibold lg:text[48px] text-[32px] lg:leading-[64px] leading-[58px] text-white hover:text-emerald-200 cursor-pointer"
            >
              {navLink.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-emerald-400 flex lg:flex-col-reverse flex-row lg:justify-end justify-between items-center lg:px-10 p-6 lg:min-w-[200px]">
        <div className="lg:pt-16 cursor-pointer">
          <img src={search} alt="search" className="size-[32px]" />
        </div>

        <div className="lg:pt-16 flex lg:flex-col flex-row gap-5">
          <p
            className={`${
              !english ? "text-teal-700" : "text-black"
            } cursor-pointer`}
            onClick={() => setEnglish(true)}
          >
            EN
          </p>
          <p
            className={`${
              !english ? "text-black" : "text-teal-700"
            } cursor-pointer`}
            onClick={() => setEnglish(false)}
          >
            عربي
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
