const CustomToggle = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="ms-3">{label}</span>
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="peer peer-checked:bg-green-600 after:top-[2px] after:absolute relative bg-neutral-700 after:bg-white after:border border-neutral-600 peer-checked:after:border-white rounded-full after:rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-neutral-300 w-9 after:w-4 h-5 after:h-4 after:content-[''] after:transition-all rtl:peer-checked:after:-translate-x-full peer-checked:after:translate-x-full after:start-[2px]"></div>
      </label>
    </div>
  );
};

export default CustomToggle;
