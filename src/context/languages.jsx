import { useEffect, useState, createContext } from "react";

const Context = createContext("uz");

const Provider = ({ children }) => {
  const [lang, setLang] = useState(window.localStorage.getItem("language") || "uz" );

  useEffect(() => {
    if(lang){
      window.localStorage.setItem("language", lang)
    } else {
      window.localStorage.removeItem("language")
    }
  }, [lang])

  return (
    <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>
  );
};

export {Context, Provider}