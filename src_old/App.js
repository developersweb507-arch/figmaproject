import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import DemouseState from "./Components/DemouseState";
import Demo21 from './Components/Demo21'


function App() {
  return (
    <div >
<BrowserRouter>
<Demo21/>
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
