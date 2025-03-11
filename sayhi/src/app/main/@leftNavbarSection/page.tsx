"use client";

import { useState } from "react";
import LeftNavbar from "@/components/navbar/leftNavbar";

const LeftNavbarSection = () => {
  const [leftNavToggle, setLeftNavToggle] = useState(null);

  return (
    <section className="hidden sm:block bg-neutral-800 py-2 w-12 h-screen">
      <LeftNavbar />
    </section>
  );
};

export default LeftNavbarSection;
