import { useState, useEffect } from "react";
import Search from "./components/Search";
import githubService from "./services/Githubservice";


function App() {
  return ( 
    <div>
      <Search />
      <githubService />
    </div>
    
  );
}
export default App;