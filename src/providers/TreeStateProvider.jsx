import  { createContext, useEffect, useState } from "react";

 export const TreeContext = createContext();
const TreeStateProvider = ({children}) => {
    const [trees, setTrees] = useState([]);
    const [loading, setLoading] = useState(true)



  useEffect(() => {
    fetch("https://leafy-universe-server.onrender.com/trees")
      .then((res) => res.json())
      .then((data) =>{
    if(data){
       setTrees(data)
       setLoading(false)
    }
       
      } );
  }, []);
  
 const  data = {
    trees,
    loading
  }
    

    return <TreeContext.Provider value={data}>{children}</TreeContext.Provider>


  

};

export default TreeStateProvider;
