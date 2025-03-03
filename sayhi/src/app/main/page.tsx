import BottomNavbar from "@/components/navbar/bottomNavbar";
import LeftNavbar from "@/components/navbar/leftNavbar";
import TopNavbar from "@/components/navbar/topNavbar";
import EmptyMain from "@/components/empty/emptyMain";

const Main = () => {
  return (
    <main className="flex justify-center items-center bg-slate-900 w-screen h-screen">
      <section className="hidden md:flex justify-center bg-neutral-800 py-2 w-15 h-screen">
        <LeftNavbar />
      </section>
      <section className="bg-neutral-700 border-1 border-neutral-800 w-full md:w-96 h-full">
        <TopNavbar />
        <BottomNavbar />
      </section>
      <section className="hidden md:flex justify-center items-center bg-neutral-700 w-full h-screen">
        <EmptyMain />
      </section>
    </main>
  );
};

export default Main;
