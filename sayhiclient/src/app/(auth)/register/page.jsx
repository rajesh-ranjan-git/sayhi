import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-panel-header-background w-screen h-screen">
      <div className="flex justify-center items-center gap-2 text-white">
        <Image src="/sayhi.gif" alt="SayHi" width={300} height={300} />
      </div>
    </div>
  );
};

export default Register;
