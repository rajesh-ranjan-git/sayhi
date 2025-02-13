"use client";

import React, { useEffect, useState } from "react";
import ChatList from "./chatlist/chatList";
import Empty from "./empty";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/apiRoutes";
import { useRouter } from "next/navigation";
import { useStateProvider } from "@/context/stateContext";
import { reducerCases } from "@/context/constants";
import Chat from "./chat/chat";

const Main = () => {
  const [redirectLogin, setRedirectLogin] = useState(false);
  const router = useRouter();
  const [{ userInfo }, dispatch] = useStateProvider();

  onAuthStateChanged(firebaseAuth, async (currentUser) => {
    if (!currentUser) {
      setRedirectLogin(true);
    }

    if (!userInfo && currentUser?.email) {
      const { data } = await axios.post(CHECK_USER_ROUTE, {
        email: currentUser.email,
      });

      if (!data.success) {
        router.push("/login");
      }

      const { id, name, email, profileImage, status } = data;
      dispatch({
        type: reducerCases.SET_USER_INFO,
        userInfo: {
          id,
          name,
          email,
          profileImage,
          status,
        },
      });
      router.push("/");
    }
  });

  useEffect(() => {
    if (redirectLogin) {
      router.push("/login");
    }
  }, [redirectLogin]);

  return (
    <>
      <div className="grid md:grid-cols-main w-screen max-w-full h-screen max-h-screen overflow-hidden">
        <ChatList />
        {/* <Empty /> */}
        <Chat />
      </div>
    </>
  );
};

export default Main;
