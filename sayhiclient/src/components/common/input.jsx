import React from "react";

const Input = ({ name, state, setState, label = false }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="px-1 text-lg text-teal-light">
          {name}
        </label>
      )}
      <div>
        <input
          type="text"
          name={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="bg-input-background px-5 text-sm focus:outline-none py-4 rounded-lg w-full h-10 text-white"
        />
      </div>
    </div>
  );
};

export default Input;
