import React from "react";
import Home from "./components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
  // yaha pe hum useLocation use kr rahe h ki jse hi url change ho home pe toh home pe button disable ho jaye --
  const { search, pathname } = useLocation();
  return (
    <div className="h-screen w-screen flex">
      {/* here i am using the routes to navigate the pages from route , so i added the diffrent componnents in routes--- */}
      {/* har particlr prod. pe detail show krni h isliye hum details/:id use kr rahe h */}

      {(pathname != "/" || search.length > 0) && (<Link to="/" className="absolute top-5 left-5 py-1 px-8 border rounded border-red-200 text-red-500 shadow-md  dark:text-white dark:bg-red-600 dark:shadow-slate-600 font-semibold left-[17%] ">Home</Link>)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
