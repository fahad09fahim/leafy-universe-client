import { Link, useLoaderData } from "react-router-dom";

const TreeDetails = () => {
  const trees = useLoaderData();
 const {name,image,price,health, details,age,height} = trees;
  return (
   <div className="my-8 mx-8">
     <div className="card lg:card-side bg-base-100 shadow-xl  ">
      <figure >
        <img className="rounded-lg"
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <ul>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>Health: {health}</li>
            <li>price: {price}</li>
        </ul>
        <p><small>{details}</small></p>
     
        <div className="card-actions justify-end">
          <Link className="btn btn-secondary" to="/">Back to home</Link>
          <button className="btn btn-primary">Buy Now</button>
          
        </div>
      </div>
    </div>
   </div>
  );
};

export default TreeDetails;
