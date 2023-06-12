import "./App.css";
import Description from "./components/Home/Description box/Description";
import TodoList from "./components/Home/Home";
import Navbars from "./components/Home/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    // <Navbars/>
    // <Routes>
    // <Route path='/' element={<TodoList/>}/>
    // </Routes>
    // </BrowserRouter>
    <div>
    
      {/* <Navbars/>
      <TodoList/> */}
      <Description/>
    </div>
  );
}

      
export default App;
