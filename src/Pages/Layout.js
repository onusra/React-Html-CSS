import React from 'react'
import Nav from "./Nav"
import {About,Home,Feature,Login,Register} from "../component/index"
import {Routes, Route} from "react-router-dom"
const Layout = () => {
  return (
    
        <Routes>
            
            <Route path="/" element={<Nav/>}>
              
              <Route index element={<Home/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/Feature" element={<Feature/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
            </Route>
            
        </Routes>
    
  )
}

export default Layout