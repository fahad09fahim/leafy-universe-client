import  { createContext, useEffect, useState } from "react";
 export const TreeContext = createContext();
const TreeStateProvider = ({children}) => {
    const [trees, setTrees] = useState([]);



  useEffect(() => {
    fetch("https://leafy-universe-server.vercel.app/trees")
      .then((res) => res.json())
      .then((data) => setTrees(data));
  }, [trees]);
    
  return (
    <>
      <TreeContext.Provider value={trees}>{children}</TreeContext.Provider>
    </>
  );
};

export default TreeStateProvider;
