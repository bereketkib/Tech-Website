import { useState, useEffect } from "react";
import { cancel, logo, setting } from "../assets";
import Navigation from "./Navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [settingClicked, setSettingClicked] = useState(false);
  const [verticalChange, setVerticalChange] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setVerticalChange("transition-all duration-500");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerticalChange("");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSetting = () => {
    setSettingClicked((prevSetting) => !prevSetting);
    if (!settingClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <header
      className={`fixed top-0 w-screen z-10 flex ${
        settingClicked ? "h-screen overflow-hidden flex-col" : ""
      }`}
    >
      <div
        className={`${verticalChange} w-full flex items-center ${
          scrolled
            ? "bg-slate-800"
            : settingClicked
            ? "bg-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="flex-1">
          <img
            src={logo}
            alt="logo"
            className={`pl-5 ${
              scrolled
                ? "lg:w-[120px] w-[100px] py-3 lg:py-5"
                : settingClicked
                ? "lg:w-[120px] w-[100px] py-3 lg:py-5"
                : "lg:w-[140px] w-[120px] py-5 lg:py-8"
            } ${verticalChange}`}
          />
        </div>

        <div
          className={`lg:min-w-[200px] flex justify-center items-start ${
            scrolled ? "py-5 lg:py-8" : "py-8 lg:py-11"
          } ${
            settingClicked ? "lg:bg-emerald-400" : ""
          } lg:pl-[47px] lg:pr-[48px] px-6 h-full`}
          onClick={handleSetting}
        >
          {settingClicked ? (
            <img
              src={cancel}
              alt="cancel"
              className={`w-[18px] cursor-pointer`}
            />
          ) : (
            <img
              src={setting}
              alt="setting"
              className={`w-[27px] ${verticalChange} cursor-pointer`}
            />
          )}
        </div>
      </div>

      {settingClicked ? <Navigation /> : null}
    </header>
  );
};

export default Header;
