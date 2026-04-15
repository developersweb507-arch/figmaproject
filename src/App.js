import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";


function App() {
  return (
    <div >
<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/header" element={<Header/>}/>




</Routes>


</BrowserRouter>


    </div>
  );
}

export default App;
