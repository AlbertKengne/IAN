import React from "react";

import LogoImage from "../../../assets/logo.png";

export const Logo = () => (
  <a href="/" className="flex items-center gap-2 no-underline">
    <div className="relative h-12 w-12">
      <img
        src={LogoImage}
        alt="Club IAN"
        className="h-full w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#146cb4]/20 to-[#eb600e]/20 rounded-lg" />
    </div>
    <div className="hidden md:block">
      <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Club IAN (ENSPD)
      </h1>
      <p className="text-xs text-gray-400">
        L'innovation est une affaire de tous!
      </p>
    </div>
  </a>
);
