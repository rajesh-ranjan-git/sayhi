const MainLayout = ({
  children,
  chatListSection,
  chatMainSection,
  leftNavbarSection,
}: {
  children: React.ReactNode;
  chatListSection: React.ReactNode;
  chatMainSection: React.ReactNode;
  leftNavbarSection: React.ReactNode;
}) => {
  return (
    <div className="grid sm:grid-cols-[3rem_20rem_1fr] w-full h-screen">
      {leftNavbarSection}
      <div className="flex flex-col bg-neutral-500 border-neutral-800 border-r w-full h-screen">
        <div className="bg-neutral-600 w-full h-16"></div>
        <div className="flex-1 bg-neutral-500 w-full"></div>
        <div className="sm:hidden bg-neutral-600 w-full h-12"></div>
      </div>
      <div className="hidden sm:flex flex-col bg-neutral-500 w-full h-screen">
        <div className="bg-neutral-600 w-full h-16"></div>
        <div className="flex-1 w-full g-neutral-500"></div>
        <div className="bg-neutral-600 w-full h-12"></div>
      </div>
    </div>
  );
};

export default MainLayout;
