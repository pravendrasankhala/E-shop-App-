import Header from "./Components/Header/Header.jsx";

import { Outlet } from "react-router-dom";
import ContextProvider from "./Contexts/Context.jsx";



function App() {
  return (
    <ContextProvider>
      <div className="w-full">
      <Header />
      <Outlet />
    </div>
    </ContextProvider>
      
   
   
  );
}

export default App;
