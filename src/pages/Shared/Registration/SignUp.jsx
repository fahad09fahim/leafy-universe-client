import Swal from "sweetalert2";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  // -------------
  const navigate = useNavigate()
  // -------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    // console.log( email, password)
    createUser(email, password, name)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire("Welcome!", "Account create successfully", "success");
          navigate("/trees")
        }
      })
      .catch((err) => {
        if (err) {
          Swal.fire(
            "Warning",
            "Something went wrong! Please try again.",
            "warning"
          );
        }
      });
  };

  return (
    <div className="card w-96 glass my-7 mx-auto bg-[#237A57]">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-serif">
                Enter Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              className="input input-bordered input-info w-full max-w-xs space-y-8"
            />
            {errors.name && <span className="text-red-600">Name required</span>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-serif">
                Enter Your Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              })}
              placeholder="Enter Email"
              className="input input-bordered input-info w-full max-w-xs space-y-8"
            />
            {errors.email && (
              <span className="text-red-600">Email required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-600">Enter valid Email</span>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-serif">
                Enter Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              })}
              placeholder="Enter Password"
              className="input input-bordered input-info w-full max-w-xs space-y-8"
            />
            {errors.password && (
              <span className="text-red-600">Password required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">Password must be 8 character</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-info">
                Password must least one uppercase and one lowercase{" "}
              </span>
            )}
          </div>
          <div className="card-actions justify-center">
            <input
              className="btn btn-secondary border-x-cyan-950 mt-5"
              value="Register"
              type="submit"
            />
          </div>
        </form>
        <div className="text-white mt-1">
          <span>
            Already have an account?{" "}
            <Link className="text-info" to="/login">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
