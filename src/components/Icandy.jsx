import React from "react";
import Logo from "../assets/images/png/logo.png";
import { iconList } from "./common/Helper";
import Linerange from "../assets/images/png/line-range.png";
import { useHotkeys } from "react-hotkeys-hook";

const MaskPractice = () => {
  useHotkeys("f5", () => alert("F5 was pressed"));
  return (
    <div className="bg-dining bg-cover bg-center min-h-screen flex items-center justify-center py-10 relative">
      <div className="container xl:max-w-[1320px] flex items-center justify-center flex-col px-4">
        <a href="#">
          <img
            src={Logo}
            alt="logo"
            width={368}
            height={261}
            className="mx-auto"
          />
        </a>
        <h1 className="bg-textGradient bg-clip-text text-transparent md:text-7xl sm:text-5xl text-4xl text-center font-extrabold animate-[mover_30s_linear_infinite] bg-top">
          We’re Coming Soon
        </h1>
        <p className="sm:text-xl text-base !leading-[150%] font-normal text-white text-center sm:mt-4 mt-3 text-opacity-70 max-w-[544px] mx-auto">
          Currently we are working on our brand new website and will be
          launching soon!
        </p>
        <p className="sm:text-xl text-base !leading-[150%] font-semibold text-white text-center sm:mt-4 mt-3 max-w-[328px] mx-auto">
          For Inquiries Please Contact Us{" "}
          <a
            href="mailto:info@icandydecor.com"
            target="blank"
            className="text-[#0F63DD] underline"
          >
            info@icandydecor.com
          </a>
        </p>
        <div className="flex items-center justify-center gap-4 sm:mt-4 mt-3">
          {iconList.map((obj, index) => (
            <a
              key={index}
              href={obj.link}
              className="w-[34px] h-[34px] rounded-full bg-purpleGradient flex items-center justify-center hover:shadow-[0_-64px_0_0_#ffffff_inset] group shadow-[0_0_0_0_#ffffff_inset] transition-all ease-linear duration-300"
            >
              {obj.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <img
          src={Linerange}
          alt="Linerange"
          className="w-[70px] h-[70px] shadow-[0px_4px_16.6px_0px_#8058B3]"
        />
      </div>
    </div>
  );
};

export default MaskPractice;