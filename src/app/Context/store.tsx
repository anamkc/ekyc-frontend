"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  userhash: string;
  setUserhash: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  userhash: "",
  setUserhash: (): string => "",
  //  data: [],
  // setData: (): DataType[] => []
});

export const GlobalContextProvider = ({ children }: any) => {
  const [userhash, setUserhash] = useState("");
  // const [data, setData] = useState<[] | DataType[]>([]);

  return (
    <GlobalContext.Provider value={{ userhash, setUserhash }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
