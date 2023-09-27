import { Link } from "react-router-dom";


const TreeCard = ({ tree }) => {
  const {_id, name, image ,age,price } = tree;
  return (

      <div className="card  w-auto bg-base-100 shadow-xl" data-aos="zoom-in">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-start font-serif" data-aos="zoom-in">
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
          <p>price: {price}</p>
          <div>
            <Link to={`/trees/${_id}`} className="btn btn-info">Details</Link>
          </div>
        </div>
      </div>
 
  );
};

export default TreeCard;
