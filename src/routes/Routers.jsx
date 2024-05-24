import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from '../pages/About'
import KeyStat from '../pages/KeyStat'
// import Links from '../pages/Links'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/key-stat' element={<KeyStat/>}/>
        {/* <Route path='/link' element={<Links/>}/> */}
    </Routes>
    </>
  )
}

export default Routers