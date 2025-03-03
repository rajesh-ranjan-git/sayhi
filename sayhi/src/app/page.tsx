import InitialLoader from "@/components/loader/initialLoader";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 bg-slate-200 w-full h-screen">
      <InitialLoader />
    </main>
  );
}
