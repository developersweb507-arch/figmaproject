import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import DemouseState from "./Components/DemouseState";


function App() {
  return (
    <div >
<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/header" element={<Header/>}/>
<Route path="/demo" element={<DemouseState/>}/>




</Routes>


</BrowserRouter>


    </div>
  );
}

export default App;
