import  { createContext, useEffect, useState } from "react";

 export const TreeContext = createContext();
const TreeStateProvider = ({children}) => {
    const [trees, setTrees] = useState([]);
  



  useEffect(() => {
    fetch("https://leafy-universe-server-etmczqdyv-fahad09fahim.vercel.app/trees")
      .then((res) => res.json())
      .then((data) =>{
    if(data){
       setTrees(data)
    }
       
      } );
  }, []);
    
  if(trees){
    return (
    <>
      <TreeContext.Provider value={trees}>{children}</TreeContext.Provider>
    </>  );
  }
  

};

export default TreeStateProvider;
