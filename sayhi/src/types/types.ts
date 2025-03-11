import { Dispatch, SetStateAction } from "react";

export type LeftNavbarProps = {
  leftNavToggle: boolean;
  setLeftNavToggle: (leftNavToggle: boolean) => void;
};
