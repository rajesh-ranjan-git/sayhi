"use client";

import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebaseConfig";

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(firebaseAuth, provider);
    console.log("user : ", user);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-panel-header-background w-screen h-screen">
      <div className="flex justify-center items-center gap-2 text-white">
        <Image src="/sayhi.gif" alt="SayHi" width={300} height={300} />
        <span className="text-6xl md:text-7xl">SayHi</span>
      </div>
      <button
        className="flex justify-center items-center gap-7 bg-search-input-container-background p-5 rounded-lg"
        onClick={() => handleLogin()}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-2xl text-white">Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
