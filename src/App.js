
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Emplooys from "./Components/Emplooys";
import Header from "./Components/Header";

function App() {
  return (
    <div >
<BrowserRouter>
<Header/>
<Routes>

<Route path="/" element={<Home/>}>
<Route path="/employe" element={<Emplooys/>}/>
<Route path="/sidebar" element={<Sidebar/>}/>

</Route>

</Routes>


</BrowserRouter>


    </div>
  );
}

export default App;
