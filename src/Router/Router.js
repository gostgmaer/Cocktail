import React, { Fragment } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Components/Home';
import SHowDetailsData from '../Components/Pages/SHowDetailsData';
import { useGlobalContext } from '../Context/Context';
import NotFound from "../Not-Found/404";

const Router = () => {
  const { cocktail,cocktailidCheck } = useGlobalContext
  return (
    
    <Routes>
    <Route path="*" element={<NotFound></NotFound>}></Route>
    <Route path="" element={<Home></Home>}></Route>
    <Route path='/cocktail/:id' element={<SHowDetailsData></SHowDetailsData>}></Route>
  </Routes>
  )
}

export default Router