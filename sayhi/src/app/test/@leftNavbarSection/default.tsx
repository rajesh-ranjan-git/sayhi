"use client";

import LeftNavbar from "@/components/navbar/leftNavbar";
import { useState } from "react";

const LeftNavbarSection = () => {
  const [leftNavToggle, setLeftNavToggle] = useState(null);

  return (
    <section className="hidden md:flex justify-center bg-neutral-800 py-2 w-15 h-screen">
      <LeftNavbar />
    </section>
  );
};

export default LeftNavbarSection;
