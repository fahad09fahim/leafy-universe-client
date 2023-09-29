import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TreeDetails = () => {
  
  const{user}= useContext(AuthContext)
  const trees = useLoaderData();
  const navigate = useNavigate()
  const {  name, image, price, health, details, age, height } = trees;

  const { register, handleSubmit } = useForm();
  const onSubmit = (form) => {
       const name = form.name;
       const treeName = form.treeName;
       const phoneNum = form.phoneNumber;
       const address= form.address;
       const email = form.email;
       const quantity = form.quantity;
       const orderData = {name, phoneNum, address, email ,treeName,quantity}
      //  console.log(orderData)
      fetch("http://localhost:5000/orders",{
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(orderData)
      })
      .then(res=> res.json())
      .then(data=>{
        if(data){
          Swal.fire("Thank you!", "Order place successfully", "success");
          navigate("/trees");
      }
      })
  }
  return (
    <div className="my-8 mx-8">
      <div className="card lg:card-side bg-base-100 shadow-xl  ">
        <figure>
          <img className="rounded-lg" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <ul>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>Health: {health}</li>
            <li>price: {price}</li>
          </ul>
          <p>
            <small>{details}</small>
          </p>

          <div className="card-actions justify-end">
            <Link className="btn btn-secondary" to="/">
              Back to home
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Buy Now
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form onSubmit={handleSubmit(onSubmit)}  className="card-body p-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                {...register("name")}
                defaultValue={user?.name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tree Name</span>
              </label>
              <input
                type="text"
                readOnly
                {...register("treeName")}
                defaultValue={name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="+8801------"
                required
                {...register("phoneNumber",{pattern:/^01[3-9]\d{8}$/})}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                {...register("address")}
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email")}
                required
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                {...register("quantity")}
                required
                className="input input-bordered"
              />
            </div>
         
           
            
           
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Confirm order"
              className="btn btn-success"
            ></input>
          </div>
        </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeDetails;
