import { createContext, useState } from "react";
import { getLocaleFromLS, getModeFromLS } from "../utils/utils";

const initialAppContext = {
  mode: getModeFromLS(),
  locale: getLocaleFromLS(),
  setMode: () => null,
  setLocale: () => null
};

// initialAppContext là giá trị khởi tạo của Context nếu Provider không truyền vào props value
export const AppContext = createContext(initialAppContext);

export const AppProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [locale, setLocale] = useState("vi");

  return (
    <AppContext.Provider
      value={{
        mode,
        locale,
        setMode,
        setLocale
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
