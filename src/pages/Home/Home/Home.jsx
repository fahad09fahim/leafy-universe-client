import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import TreeCard from "../../Trees/TreeCard";
import { useContext } from "react";
import { TreeContext } from "../../../providers/TreeStateProvider";
import { BiSolidRightArrow } from "react-icons/bi";
import About from "../../Shared/About Us/About";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  const trees = useContext(TreeContext);
  const limitedTrees = trees.slice(0, 6);

  return (
    <div>
      {/* --------banner--------- */}
      <Banner />
      {/* limited data will show in home page */}
      <div className="my-7 p-11">
        <h1 className="text-4xl text-center">
          Available Tr<span className="text-lime-600">ee</span>s
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 items-center  gap-6">
          {limitedTrees.map((tree) => (
            <TreeCard key={tree._id} tree={tree}></TreeCard>
          ))}
        </div>
        <div className="flex justify-center lg:justify-end">
          <Link className="btn btn-accent mt-6 " to="/trees">
            Show All <BiSolidRightArrow />
          </Link>
        </div>
      </div>
      {/* -----------about us----------- */}
      <About/>
      {/* ----------footer--------- */}
      <Footer/>
    </div>
  );
};

export default Home;
