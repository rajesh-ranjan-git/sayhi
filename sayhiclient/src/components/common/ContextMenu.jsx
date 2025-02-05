import React, { useRef } from "react";

const contextMenu = ({ options, coordinates, contextMenu, setContextmenu }) => {
  const contextMenuRef = useRef(null);

  const handleClick = (e, callback) => {
    e.stopPropagation();
    setContextmenu(false);
    callback();
  };

  return (
    <div
      className="z-[100] fixed bg-dropdown-background shadow-xl py-2 rounded-md"
      ref={contextMenuRef}
      style={{ top: coordinates.y, left: coordinates.x }}
    >
      <ul>
        {options.map(({ name, callback }) => (
          <li
            key={name}
            onClick={(e) => handleClick(e, callback)}
            className="hover:bg-background-default-hover px-5 py-2 cursor-pointer"
          >
            <span className="text-white">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
