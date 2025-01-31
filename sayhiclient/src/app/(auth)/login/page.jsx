"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebaseConfig";
import { useStateProvider } from "@/context/stateContext";
import { reducerCases } from "@/context/constants";

const Login = () => {
  const router = useRouter();

  const [{}, dispatch] = useStateProvider();

  const handleLogin = async () => {
    // const provider = new GoogleAuthProvider();
    // const { user } = await signInWithPopup(firebaseAuth, provider);
    // const {
    //   user: { displayName: name, email, photoUrl: profileImage },
    // } = await signInWithPopup(firebaseAuth, provider);

    // try {
    //   if (email) {
    //     const { data } = await axios.post(CHECK_USER_ROUTE, { email });
    //     console.log("data : ", data);

    //     if (!data.status) {
    //       dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
    //       dispatch({
    //         type: reducerCases.SET_USER_INFO,
    //         userInfo: {
    //           name,
    //           email,
    //           profileImage,
    //           status: "",
    //         },
    //       });

    //       router.push("/onboarding");
    //     }
    //   }
    // } catch (error) {
    //   console.log("error : ", error);
    // }

    // console.log("user : ", user);

    router.push("/onboarding");
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
