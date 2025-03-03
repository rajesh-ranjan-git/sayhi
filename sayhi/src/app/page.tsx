import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 bg-green-300 w-screen h-screen text-red-600 text-5xl">
      <div>SayHi</div>
      <Button className="bg-red-600 hover:bg-red-800 px-4 py-2 rounded-lg transition-all ease-in-out">
        Click Me!
      </Button>
    </main>
  );
}
