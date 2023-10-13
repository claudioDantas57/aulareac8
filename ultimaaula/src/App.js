import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {MMORPG} from "./pages/MMORPG";
import {FFS} from "./pages/FFS";
import {MOBA} from "./pages/MOBA";
import {Error404} from "./pages/Error404";
import {Menu} from "./pages/Menu";



export const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="mmorpg/" element={<MMORPG/>}/>
        <Route path="ffs/" element={<FFS/>}/>
        <Route path="moba/" element={<MOBA/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}
      
    
      
  


