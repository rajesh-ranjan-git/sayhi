"use client";

import LeftNavbar from "@/components/navbar/leftNavbar";
import { useState } from "react";

const LeftNavbarSection = () => {
  const [leftNavToggle, setLeftNavToggle] = useState(null);

  return (
    <section className="hidden sm:block bg-neutral-700 w-12 h-full">
      <LeftNavbar />
    </section>
  );
};

export default LeftNavbarSection;
