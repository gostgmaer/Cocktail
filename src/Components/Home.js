import React from "react";
import { useGlobalContext } from "../Context/Context";
import logo from "../logo.svg";
import Loading from "../Notification/Loading";
import CockTailSearchForm from "./Pages/CockTailSearchForm";
import DataCard from "./Pages/DataCard";
const Home = () => {
  const { cocktail, cocktailidCheck,loading } = useGlobalContext();
  
  return (
    <div>
    
      <CockTailSearchForm></CockTailSearchForm>
      <DataCard></DataCard>
      
    </div>
  );
};

export default Home;
