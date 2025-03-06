const DashboardLayout = ({
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
    <main className="flex justify-center items-center bg-slate-800 w-screen h-screen">
      {leftNavbarSection}
      {chatListSection}
      {chatMainSection}
    </main>
  );
};

export default DashboardLayout;
