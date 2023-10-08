
import { useContext } from "react";
import TreeCard from "./TreeCard";
import { TreeContext } from "../../providers/TreeStateProvider";


const Trees = () => {
const{ trees }= useContext(TreeContext)  
  return (
    <div className="my-7 p-11">
          <h1 className="text-4xl text-center">
              Available Tr<span className="text-lime-600">ee</span>s
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-6 items-center  gap-6">
              {trees.map(tree => <TreeCard key={tree._id}
                  tree={tree}
              ></TreeCard>
              )}
          </div>
      </div>
  );
};

export default Trees;
