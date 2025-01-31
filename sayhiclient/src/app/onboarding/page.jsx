"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/stateContext";
import Input from "@/components/common/input";
import Avatar from "@/components/common/avatar";

const Onboarding = () => {
  //   const [{ userInfo }] = useStateProvider();
  //   const [name, setName] = useState(userInfo?.name || "");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/defaultAvatar.png");

  return (
    <div className="flex flex-col justify-center items-center bg-panel-header-background w-screen h-screen text-white">
      <div className="flex md:flex-row flex-col justify-center items-center gap-2">
        <Image src="/sayhi.gif" alt="SayHi" width={200} height={200} />
        <span className="text-6xl md:text-7xl">SayHi</span>
      </div>
      <h2 className="my-5 text-3xl md:text-5xl"> Create your profile</h2>
      <div className="flex gap-5 mt-6">
        <div className="flex flex-col justify-center items-center gap-6">
          {/* {userInfo.name} */}
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
        </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
