import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddTree = () => {
  const { user } = useContext(AuthContext);
const navigate = useNavigate()
  // http://localhost:5000/trees
  const { register, handleSubmit } = useForm();
  const onSubmit = (form) => {
    const name= form.name;
    const age = form.age;
    const height = form.height;
    const health = form.health;
    const price = form.price;
    const image = form.image;
    const details = form.details;
    const email = form.email;
    const addTrees = {name,age,height,health,price,image,details,email}
    // console.log(addTrees);
    fetch("http://localhost:5000/trees",{
        method:'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(addTrees)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
            Swal.fire("Thank you!", "Tree added successfully", "success");
            navigate("/");
        }
      })
  
  };

  return (
    <div className="hero  bg-base-100 ">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="text"
                {...register("age")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Height</span>
              </label>
              <input
                type="text"
                {...register("height")}
               
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Health</span>
              </label>
              <input
                type="text"
                {...register("health")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <input
                type="text"
                {...register("price")}
                defaultValue={"$"}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                {...register("image")}
                placeholder="url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                {...register("details")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                {...register("email")}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add Tree"
              className="btn btn-warning"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTree;
