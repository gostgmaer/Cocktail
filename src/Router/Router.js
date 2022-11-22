import React, { Fragment } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Components/Home';
import NotFound from "../Not-Found/404";
const Router = () => {
    
  return (
    
    <Routes>
    <Route path="*" element={<NotFound></NotFound>}></Route>
    <Route path="" element={<Home></Home>}></Route>
  </Routes>
  )
}

export default Router