import React from 'react'
import logo from '../logo.svg'
import DataCard from './Pages/DataCard'
const Home = () => {
  return (
    <div> <img src={logo} className="App-logo" alt="logo" />
    <DataCard></DataCard></div>
  )
}

export default Home