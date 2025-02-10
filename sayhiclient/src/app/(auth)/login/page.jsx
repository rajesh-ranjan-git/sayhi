"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebaseConfig";
import { useStateProvider } from "@/context/stateContext";
import { reducerCases } from "@/context/constants";
import axios from "axios";
import { FIREBASE_LOGIN_ROUTE } from "@/utils/apiRoutes";

const Login = () => {
  const router = useRouter();

  // const [{}, dispatch] = useStateProvider();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(firebaseAuth, provider);
    const name = user.displayName;
    const email = user.email;
    const profileImage = user.photoURL;

    console.log("user : ", user);

    console.log("name : ", name);
    console.log("email : ", email);
    console.log("profileImage : ", profileImage);

    try {
      if (user.email) {
        const { data } = await axios.post(FIREBASE_LOGIN_ROUTE, {
          name,
          email,
          profileImage,
        });
        console.log("data : ", data);
        if (data.success) {
          // dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
          // dispatch({
          //   type: reducerCases.SET_USER_INFO,
          //   userInfo: {
          //     name,
          //     email,
          //     profileImage,
          //     status: "",
          //   },
          // });
          console.log("here");
          router.push("/onboarding");
        }
      }
    } catch (error) {
      console.log("error : ", error);
    }

    // router.push("/onboarding");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-panel-header-background w-screen h-screen">
      <div className="flex justify-center items-center gap-2 text-white">
        <Image src="/sayhi.gif" alt="SayHi" width={200} height={200} />
        <span className="text-6xl md:text-7xl">SayHi</span>
      </div>
      <button
        className="flex justify-center items-center gap-7 bg-search-input-container-background p-5 rounded-lg"
        onClick={() => handleLogin()}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
