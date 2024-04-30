import React, { createContext } from "react";
import { HeaderContextOptionsInterface } from "../../interfaces/header-interface";

export interface HeaderContextInterface {
  headerOptions: HeaderContextOptionsInterface;
  setHeaderOptions: React.Dispatch<
    React.SetStateAction<HeaderContextOptionsInterface>
  >;
}

export const HeaderOptionsContext = createContext({} as HeaderContextInterface);
