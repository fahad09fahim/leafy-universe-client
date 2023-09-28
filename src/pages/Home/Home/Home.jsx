import { Link } from "react-router-dom";

import Banner from "../Banner/Banner";
import TreeCard from "../../Trees/TreeCard";
import { useContext } from "react";
import { TreeContext } from "../../../providers/TreeStateProvider";


const Home = () => {
    const trees = useContext(TreeContext)
    const limitedTrees = trees.slice(0,6)
    return (
        <div>
         <Banner/>
       {/* limited data will show in home page */}
<div className="my-7 p-11">
      <h1 className="text-4xl text-center">
        Available Tr<span className="text-lime-600">ee</span>s
      </h1>
     <div className="grid grid-cols-1 md:grid-cols-3 mt-6 items-center  gap-6"> 
     {
            limitedTrees.map(tree=>
                <TreeCard key={tree._id}
                tree={tree}
                ></TreeCard>
            )
        }

      </div>
      <div className="flex justify-center lg:justify-end">
      <button className="btn btn-accent mt-6  "><Link to="trees">Show All ⮞</Link></button>
      </div>
    </div>
        </div>
    );
};

export default Home;