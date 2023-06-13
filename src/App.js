import React from 'react'
import Navbar from './components/navbar/Navbar'
import TodoList from './components/Home/Home';
import Description from './components/Description/Description';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
const App = () => {
  return (
//  <BrowserRouter>
//  <Routes>
<div>
    <Navbar/>
    <TodoList/> 
    {/* <Route path="/desc" element={<Description/>}/> */}
    {/* <Description/> */}
    </div>
       
      //  </Routes>
      //  </BrowserRouter> 
       
   
  )
}

export default App
