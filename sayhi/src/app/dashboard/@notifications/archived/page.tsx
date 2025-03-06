import { Card } from "@/components/ui/card";
import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <Link
        href={"/dashboard"}
        className="bg-white hover:bg-black p-2 border hover:border-white border-black rounded-lg text-black hover:text-white transition-all ease-in-out"
      >
        Default
      </Link>
    </Card>
  );
};

export default ArchivedNotifications;
