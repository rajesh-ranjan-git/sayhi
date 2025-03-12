const MainLayout = ({
  children,
  listSection,
  mainSection,
  leftNavbarSection,
}: {
  children: React.ReactNode;
  listSection: React.ReactNode;
  mainSection: React.ReactNode;
  leftNavbarSection: React.ReactNode;
}) => {
  return (
    <main className="grid sm:grid-cols-[3rem_20rem_1fr] bg-slate-800 w-screen h-screen">
      {leftNavbarSection}
      {listSection}
      {mainSection}
    </main>
  );
};

export default MainLayout;
