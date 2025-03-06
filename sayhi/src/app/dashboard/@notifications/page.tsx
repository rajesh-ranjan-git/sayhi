import { Card } from "@/components/ui/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <h1>Notifications</h1>
      <Link
        href={"/dashboard/archived"}
        className="bg-white hover:bg-black p-2 border hover:border-white border-black rounded-lg text-black hover:text-white transition-all ease-in-out"
      >
        Archived
      </Link>
    </Card>
  );
};

export default Notifications;
