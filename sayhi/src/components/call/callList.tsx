import CallListItem from "@/components/call/callListItem";

const CallList = () => {
  return (
    <div className="flex flex-col w-full h-[85.8vh] text-white">
      <span className="px-4 py-2 text-xs">Recent</span>
      <div className="flex flex-col items-center gap-2 px-2 w-full h-full overflow-x-clip overflow-y-scroll">
        <CallListItem />
        <CallListItem />
        <CallListItem />
        <CallListItem />
      </div>
    </div>
  );
};

export default CallList;
