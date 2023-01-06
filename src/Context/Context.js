import { param } from "jquery";
import React, { useState, useEffect, useContext } from "react";
import InvokeAPI from "../APICall.js/ApiCall";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [issidebarOpen, setissidebarOpen] = useState(false);
  const [cocktail, setCocktail] = useState([]);
  const [cocktailid, setcocktailid] = useState("");
  const [keyword, setkeyword] = useState("");
  const [detailsCocktail, setdetailsCocktail] = useState([]);
  const [loading, setloading] = useState(true);

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
    try {
      // setloading(true)
      setloading(true);
      const res = await InvokeAPI(
        "search.php",
        "get",
        '',
        {},
        (param = { s: keyword }),
        ""
      );
      if (res.drinks) {
        setCocktail(res.drinks);
      } else {
        setCocktail([]);
      }

      setTimeout(() => {
        setloading(false);
      }, 100);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        issidebarOpen,
        cocktail,
        setkeyword,
        loading,
        cocktailidCheck,
        detailsCocktail,
        setdetailsCocktail,
        setloading,
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
