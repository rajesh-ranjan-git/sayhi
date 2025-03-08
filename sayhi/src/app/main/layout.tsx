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
    <main className="grid sm:grid-cols-[3rem_20rem_1fr] bg-slate-800 w-screen h-screen">
      {leftNavbarSection}
      {chatListSection}
      {chatMainSection}
    </main>
  );
};

export default MainLayout;
