"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Input from "@/components/common/input";
import Avatar from "@/components/common/avatar";
import axios from "axios";
import { ONBOARD_USER_ROUTE } from "@/utils/apiRoutes";
import { useRouter } from "next/navigation";

const Onboarding = () => {
  //   const [{ userInfo }] = useStateProvider();
  //   const [name, setName] = useState(userInfo?.name || "");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/defaultAvatar.png");

  const router = useRouter();

  // useEffect(() => {
  //   if (!newUser && !userInfo?.email) {
  //     router.push("/login");
  //   } else if (!newUser && userInfo?.email) {
  //     router.push("/");
  //   }
  // }, [newUser, userInfo, router]);

  const onboardUserHandler = async () => {
    // if (validateDetails()) {
    //   const email = userInfo.email;
    //   try {
    //     const { data } = axios.post(ONBOARD_USER_ROUTE, {
    //       email,
    //       name,
    //       about,
    //       image,
    //     });
    //     if (data.success) {
    //       dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
    //       dispatch({
    //         type: reducerCases.SET_USER_INFO,
    //         userInfo: {
    //           id: data.id,
    //           name,
    //           email,
    //           profileImage: image,
    //           status: about,
    //         },
    //       });
    //       router.push("/");
    //     } else {
    //       const { id, name, email, profileImage, status } = data;
    //       dispatch({
    //         type: reducerCases.SET_USER_INFO,
    //         userInfo: {
    //           id,
    //           name,
    //           email,
    //           profileImage,
    //           status,
    //         },
    //       });
    //       router.push("/");
    //     }
    //   } catch (error) {
    //     console.log("error : ", error);
    //   }
    // }

    router.push("/");
  };

  const validateDetails = () => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-col justify-center items-center bg-panel-header-background w-screen h-screen text-white">
      <div className="flex md:flex-row flex-col justify-center items-center gap-2">
        <Image src="/sayhi.gif" alt="SayHi" width={200} height={200} />
        <span className="text-6xl md:text-7xl">SayHi</span>
      </div>
      <h2 className="my-5 text-3xl md:text-5xl"> Create your profile</h2>
      <div className="flex md:flex-row flex-col gap-5 mt-6">
        <div>
          <Avatar type="xl" image={image} setImage={setImage} />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          {/* {userInfo.name} */}
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div className="flex justify-center items-center">
            <button
              className="flex justify-center items-center gap-7 bg-search-input-container-background p-5 rounded-lg"
              onClick={onboardUserHandler}
            >
              Create Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
