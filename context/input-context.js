import  { createContext, useState } from "react";

export const InputContext = createContext();

 const InputContextProvider = ({ children }) => {
  const [values, setValues] = useState({
    principal: 25000,
    annualRate: 12,
    time: 5,
  });

  const updateValue = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <InputContext.Provider value={{ values, updateValue }}>
      {children}
    </InputContext.Provider>
  );
};
export default InputContextProvider;
