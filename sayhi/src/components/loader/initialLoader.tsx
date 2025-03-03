import { MessageCircle, ShieldCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const InitialLoader = () => {
  return (
    <div className="flex flex-col items-center gap-3 min-w-60">
      <MessageCircle className="text-green-600" size={60} />
      <h3 className="text-slate-600 text-2xl">SayHi</h3>
      <Progress value={33} className="rounded-full w-50 h-1" />
      <p className="flex justify-center items-center gap-2">
        <ShieldCheck className="text-green-600" size={20} />
        <span className="text-slate-500 text-xs">End-to-end encrypted</span>
      </p>
    </div>
  );
};

export default InitialLoader;
