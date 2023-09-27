

const TreeCard = ({ tree }) => {
  const { name, image ,age,price } = tree;
  return (

      <div className="card  w-auto bg-base-100 shadow-xl" data-aos="fade-right">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-start font-serif" data-aos="fade-left">
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
          <p>price: {price}</p>
          <div>
            <button className="btn btn-info">Details</button>
          </div>
        </div>
      </div>
 
  );
};

export default TreeCard;
