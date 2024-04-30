import React, { useState } from "react";
import { HeaderOptionsContext } from "./header-options.context";
import { HeaderContextOptionsInterface } from "../../interfaces/header-interface";
import { headerHome } from "../../data/header";

export const HeaderOptionsProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [headerOptions, setHeaderOptions] =
    useState<HeaderContextOptionsInterface>(headerHome);

  return (
    <HeaderOptionsContext.Provider value={{ headerOptions, setHeaderOptions }}>
      {children}
    </HeaderOptionsContext.Provider>
  );
};
