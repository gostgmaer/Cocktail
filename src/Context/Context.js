import { param } from "jquery";
import React, { useState, useEffect, useContext } from "react";
import InvokeAPI from "../APICall.js/ApiCall";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [issidebarOpen, setissidebarOpen] = useState(false);
  const [cocktail, setCocktail] = useState([]);
  const [cocktailid, setcocktailid] = useState("");
  const [keyword, setkeyword] = useState("a");
  const [detailsCocktail, setdetailsCocktail] = useState([]);

  const openSidebar = () => {
    setissidebarOpen(true);
  };
  const closeSidebar = () => {
    setissidebarOpen(false);
  };

  const cocktailidCheck = (id) => {
    console.log(id);
    setcocktailid(id);
  };

  useEffect(() => {
    apicALL();
  }, [keyword]);

  const apicALL = async () => {
    const res = await InvokeAPI(
      "search.php",
      "get",
      "",
      "",
      (param = { s: "s" }),
      ""
    );
    setCocktail(res);
    console.log(res);
  };
  

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        issidebarOpen,
        cocktail,
        cocktailidCheck,detailsCocktail, setdetailsCocktail
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
