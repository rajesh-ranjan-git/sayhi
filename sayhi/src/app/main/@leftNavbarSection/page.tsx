import LeftNavbar from "@/components/navbar/leftNavbar";

const LeftNavbarSection = () => {
  return (
    <section
      className={`relative hidden sm:block bg-neutral-800 py-2 w-12 h-screen`}
    >
      <LeftNavbar />
    </section>
  );
};

export default LeftNavbarSection;
