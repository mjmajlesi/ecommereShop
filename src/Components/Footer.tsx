import React from "react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#292927] text-white p-4 px-6 mt-12 flex items-center justify-between ">
      <span className="font-semibold ">
        © 2024 Copyright: Mohammad Javad Majlesi
      </span>
      <div className="flex items-center gap-3">
        <a href="https://github.com/mjmajlesi" target="_blank">
          <FaGithub size={20} />
        </a>
        <a href="https://t.me/Mj_majlesi" target="_blank">
          <FaTelegramPlane size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-javad-majlesi-0ab27331a/"
          target="_blank"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
