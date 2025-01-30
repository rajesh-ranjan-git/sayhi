import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-panel-header-background w-screen h-screen">
      <div className="flex justify-center items-center gap-2 text-white">
        <Image src="/sayhi.gif" alt="SayHi" width={300} height={300} />
        <span className="text-7xl">SayHi</span>
      </div>
      <button className="flex justify-center items-center gap-7 bg-search-input-container-background p-5 rounded-lg">
        <FcGoogle className="text-4xl" />
        <span className="text-2xl text-white">Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
